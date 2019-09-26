/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const QuestionText = (props) => {
  const { question, getChange } = props;

  return (
    <div>
      <div className="form__group">
        <input
          type={question.type}
          className="form__input"
          name={question.name}
          id={question.id}
          required
          placeholder={question.placeholder}
          onChange={(currentTarget) => getChange(currentTarget)}
        />
        <label htmlFor={question.id} className="form__label">
          {question.quiz}
        </label>
        <div className="alert alert--red">error</div>
      </div>
    </div>
  );
};

QuestionText.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.number,
    content: PropTypes.array,
    quiz: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  getChange: PropTypes.func.isRequired,
};
export default QuestionText;
