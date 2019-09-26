/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React from 'react';
import './App.css';
import QuestionText from './components/text';
import QuestionRadio from './components/radio';
import QuestionSelect from './components/select';
import Checkbox from './components/checkbox';
import Detail from './components/detail';
import QUESTIONS from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...QUESTIONS],
      array: [],
      show: 'show',
      form: {
        name: '',
        genres: '',
        skill: '',
        address: '',
        like: [],
        addressNow: '',
        phone: '',
        email: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    this.setState({
      show: 'hide',
    });
    return <Detail data={form} />;
  };

  onChangeHandle = (e) => {
    const { form, array } = this.state;
    const { name } = e.target;
    const value = e.target.type === 'radio' || e.target.type === 'checkbox' ? e.target.id : e.target.value;
    if (e.target.type === 'checkbox') {
      array.push(value);
      this.setState({
        array,
      });
    }
    form[name] = e.target.type === 'checkbox' ? array : value;
    this.setState(
      form,
    );
  };

  getTypeQuestion = (question) => {
    switch (question.type) {
      case 'text':
        return <QuestionText question={question} getChange={(target) => this.onChangeHandle(target)} />;
      case 'radio':
        return <QuestionRadio question={question} getChange={(target) => this.onChangeHandle(target)} />;
      case 'select':
        return <QuestionSelect question={question} getChange={(target) => this.onChangeHandle(target)} />;
      case 'checkbox':
        return <Checkbox question={question} getChange={(target) => this.onChangeHandle(target)} />;

      default:
        break;
    }
    return '';
  };

  render() {
    const { form, data, show } = this.state;
   
    return (
      <div>
        <div className={`form-box ${show}`}>
          <h2 className="form-box__title">Form question</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            {data.map((question) => (
              <div key={question.id}>
                {this.getTypeQuestion(question)}
              </div>
            ))}
            <button type="submit" className="form__btn">Submit </button>
          </form> 
        </div>
        <Detail data={form} show={show} />
      </div>
    );
  }
}


export default App;
