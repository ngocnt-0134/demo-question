/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Detail = (props) => {
  const { data, show } = props;
  return (
    <div className={`box-result ${show}`}>
      <h2 className="form-box__title">Result</h2>
      <div className="style__result">
        <h3 className="heading-style">Name*</h3>
        <span className="result result--1">{data.name}</span>
      </div>
      <div className="style__result ">
        <h3 className="heading-style">Genres*</h3>
        <span className="result result--2">{data.genres}</span>
      </div>
      <div className="style__result ">
        <h3 className="heading-style">Skill*</h3>
        <span className="result result--2">{data.skill}</span>
      </div>
      <div className="style__result ">
        <h3 className="heading-style">Address*</h3>
        <span className="result result--3">{data.address}</span>
      </div>
      <div className="style__result style__result--1">
        <h3 className="heading-style">Like*</h3>
        {
          data.like.map((item) => (<span key={item.id} className="result result--4">{item}</span>))
        }
      </div>
      <div className="style__result ">
        <h3 className="heading-style">Address Now*</h3>
        <span className="result result--3">{data.addressNow}</span>
      </div>
      <div className="style__result ">
        <h3 className="heading-style">Phone*</h3>
        <span className="result result--1">{data.phone}</span>
      </div>
      <div className="style__result ">
        <h3 className="heading-style">Email*</h3>
        <span className="result result--1">{data.email}</span>
      </div>
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    genres: PropTypes.string,
    skill: PropTypes.string,
    address: PropTypes.string,
    like: PropTypes.array,
    addressNow: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  show: PropTypes.string.isRequired,
};
export default Detail;
