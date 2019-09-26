/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const QuestionSelect = (props) => {
  const { question, getChange } = props;
  return (
    <div>
      <div className="form__group">
        <select
          className="select-box"
          name={question.name}
          id={`${question.id}`}
          onChange={(currentTarget) => getChange(currentTarget)}
        >
          <option value="">-Select address-</option>
          {question.content.map((item) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <label htmlFor={`${question.id}`} className="form__label">
          {question.quiz}
        </label>
      </div>
    </div>
  );
};
QuestionSelect.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.array,
    quiz: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  getChange: PropTypes.func.isRequired,
};
export default QuestionSelect;
