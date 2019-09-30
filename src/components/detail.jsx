/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import StyleResult from './common/styleResult';

const Detail = (props) => {
  const { data, show } = props;
  return (
    <div className={`box-result ${show}`}>
      <h2 className="form-box__title">Result</h2>
      <StyleResult title="Name*" value={data.name}/>
      <StyleResult title="Genres*" value={data.genres}/>
      <StyleResult title="Skill*" value={data.skill}/>
      <StyleResult title="Address*" value={data.address}/>
      <div className="style__result style__result--1">
        <h3 className="heading-style">Like*</h3>
        {
          data.like.map((item) => (<span key={item.id} className="result result--4">{item}</span>))
        }
      </div>
      <StyleResult title="Address Now*" value={data.addressNow}/>
      <StyleResult title="Phone*" value={data.phone}/>
      <StyleResult title="Email*" value={data.email}/>
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
