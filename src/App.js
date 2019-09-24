import React from 'react';

import './App.css';
import Text from './components/text';
import Radio from './components/radio';
import Select from './components/select';


import Checkbox from './components/checkbox';
import Detail from './components/detail';


const QUESTIONS = [
  {
    id: 1,
    type: "text",
    name: 12,
    placeholder: "Nguyen Van A...",
    quiz: "What is your name?*"
  },
  {
    id: 2,
    type: "radio",
    name: "genres",
    content: [
      { id: "ge1", value: "Yes" },
      { id: "ge2", value: "No" },
      { id: "ge3", value: "Other" }
    ],
    quiz: "Are you man?*"
  },
  {
    id: 3,
    type: "radio",
    name: "skill",
    content: [
      { id: "sk1", value: " Front-end" },
      { id: "sk2", value: "Back-end" },
      { id: "sk3", value: "HR" },
      { id: "sk4", value: "Mobile app" }
    ],
    quiz: "What is your skill?*"
  },
  {
    id: 4,
    type: "select",
    name: "address",
    quiz: "Where do you live?*",
    content: [
      { id: 1, value: "Nghe an" },
      { id: 2, value: "Ha noi" }
    ]
  },
  {
    id: 5,
    type: "checkbox",
    quiz: "What do you do in free time?*",
    name: "like",
    content: [
      { id: "li1", value: "Reading book" },
      { id: "li2", value: "Listen music" },
      { id: "li3", value: "Play game" },
      { id: "li4", value: "Going sleep" },
      { id: "li5", value: "Go swiming" },
      { id: "li6", value: "Play tenis" },
      { id: "li7", value: "Play soccer" },
      { id: "li8", value: "Other" },
    ]
  },
  {
    id: 6,
    type: "select",
    name: "addressNow",
    quiz: "Where are you staying  ?*",
    content: [
      { id: 1, value: "Nghe an" },
      { id: 2, value: "Ha noi" }
    ]
  },
  {
    id: 7,
    type: "number",
    name: "phone",
    quiz: "What is telephone number?*",
    placeholder: "09..."
  },
  {
    id: 8,
    type: "email",
    name: "email",
    quiz: "What is email?*",
    placeholder: "your email"
  },
]
class App extends React.Component {
  state = {
    data: [],
    errors: [],
    array:[],
    form: {
      name: "",
      genres: "",
      skill: "",
      address: "",
      like: [],
      addressNow: "",
      phone: "",
      email: ""
    }

  }
  async componentDidMount() {
    this.setState({
      data: [...QUESTIONS]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  onChangeHandle = (e) => {
    let { form, array } = this.state;
    console.log(e.target.value);
    let name = e.target.name;
    let value;
    value = e.target.type === "radio" || e.target.type === "checkbox" ? e.target.id : e.target.value;
    if (e.target.type==="checkbox") {
      array.push(value) ;
      this.setState({
        array
      });
    }
    form[name]=e.target.type==="checkbox"?array : value;
    this.setState(
      form
    );
    console.log(form);

  }

  getTypeQuestion = question => {
    switch (question.type) {
      case "text":
        return <Text question={question} getChange={(currentTarget) => this.onChangeHandle(currentTarget)} />

      case "radio":
        return <Radio question={question} getChange={(currentTarget) => this.onChangeHandle(currentTarget)} />

      case "select":
        return <Select question={question} getChange={(currentTarget) => this.onChangeHandle(currentTarget)} />

      case "checkbox":
        return <Checkbox question={question} getChange={(currentTarget) => this.onChangeHandle(currentTarget)} />

      default:
        break;
    }
  }
  render() {
    const {form }=this.state;
    console.log(form);
    return (
      <React.Fragment>
        <div className="form-box">
          <h2 className="form-box__title">Form question</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            {this.state.data.map((question, index) => {
              return (
                <div key={index}>
                  {this.getTypeQuestion(question)}
                </div>
              )
            })}
            <Detail data={form}/>
            <button className="form__btn">Submit </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

}

export default App;
