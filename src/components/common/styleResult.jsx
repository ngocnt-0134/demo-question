/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const StyleResult = (props) => {
  const { title, value } = props;
  return (
    <div className="style__result">
      <h3 className="heading-style">{ title }</h3>
      <span className="result result--1">{value || ''}</span>
    </div>
  );
};
StyleResult.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,

};
export default StyleResult;
