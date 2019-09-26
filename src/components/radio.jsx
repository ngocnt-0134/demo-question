/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const QuestionRadio = (props) => {
  const { question, getChange } = props;
  return (
    <div>
      <div className="form__group mt-sub-sm">
        <span className="form__label form__label--radio">
          {question.quiz}
        </span>

        {question.content.map((item) => (
          <div className="form__radio" key={item.id}>
            <input
              type="radio"
              className="form__input"
              id={item.value}
              name={question.name}
              onChange={(currentTarget) => getChange(currentTarget)}
            />
            <label htmlFor={item.value} className="form-radio__label">
              <span className="span-radio__btn"> </span>
              {item.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
QuestionRadio.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.array,
    quiz: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  getChange: PropTypes.func.isRequired,
};
export default QuestionRadio;
