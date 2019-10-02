/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendData } from './actions';
import './App.css';
import QuestionText from './components/text';
import QuestionRadio from './components/radio';
import QuestionSelect from './components/select';
import QuestionCheckbox from './components/checkbox';
import Detail from './components/detail';
import QUESTIONS from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...QUESTIONS],
      array: [],
      show: 'show',
      form: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const { sendData } = this.props;
    this.setState({
      show: 'hide',
    });
    sendData(form);
  };

  onChangeHandle = (e) => {
    const { array, form } = this.state;
    const { name } = e.target;
    const value = e.target.type === 'radio' || e.target.type === 'checkbox' ? e.target.id : e.target.value;
    if (e.target.type === 'checkbox') {
      array.push(value);
      this.setState({
        array,
      });
    }
    form[name] = e.target.type === 'checkbox' ? array : value;
    this.setState({
      form,
    });
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
        return <QuestionCheckbox question={question} getChange={(target) => this.onChangeHandle(target)} />;

      default:
        break;
    }
    return '';
  };

  render() {
    const { data, show } = this.state;
   
    return (
      <div>
        <div className={`form-box ${show}`}>
          <h2 className="form-box__title">Form question</h2>
          <form className="form">
            {data.map((question) => (
              <div key={question.id}>
                {this.getTypeQuestion(question)}
              </div>
            ))}
            <Link to="/result" onClick={this.handleSubmit} className="form__btn">
                   Submit
            </Link>
          </form> 
        </div>

        <Route path="/result" component={(props) => <Detail show={show} />} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendData: (form) => {
      dispatch(sendData(form));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
