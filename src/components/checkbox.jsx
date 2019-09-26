/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { question, getChange } = props;
  return (
    <div>
      <div className="form__group mt-sub-sm">
        <span className="form__label form__label-checkbox ">
          {question.quiz}
        </span>
        {question.content.map((item) => (
          <div className="form__checkbox" key={item.id}>
            <input
              id={item.value}
              type="checkbox"
              className="form__checkbox--input"
              value={item.value}
              name={question.name}
              onChange={(currentTarget) => getChange(currentTarget)}
            />

            <label htmlFor={item.value} className="form__checkbox--label">
              <span className="form__checkbox--btn"> </span>
              {item.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.array,
    quiz: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  getChange: PropTypes.func.isRequired,
};
export default Checkbox;
