import React from 'react';

import './App.css';
import Text from './components/text';
import Radio from './components/radio';
import Select from './components/select';
import Checkbox from './components/checkbox';

import Detail from './components/detail';

import QUESTIONS from './data';


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
    console.log(this.state.form);
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
