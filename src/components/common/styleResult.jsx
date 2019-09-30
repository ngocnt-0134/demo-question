/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const StyleResult = (props) => {
  const { title, value } = props;
  return (
    <div className="style__result">
      <h3 className="heading-style">{ title }</h3>
      <span className="result result--1">{value}</span>
    </div>
  );
};
StyleResult.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,

};
export default StyleResult;
