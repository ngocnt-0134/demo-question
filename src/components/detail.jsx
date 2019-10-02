/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyleResult from './common/styleResult';

const Detail = (props) => {
  const { show, dataRs } = props;
  return (
    <div className={`box-result ${show}`}>
      <h2 className="form-box__title">Result</h2>
      <StyleResult title="Name*" value={dataRs.name} />
      <StyleResult title="Genres*" value={dataRs.genres} />
      <StyleResult title="Skill*" value={dataRs.skill} />
      <StyleResult title="Address*" value={dataRs.address} />
      <div className="style__result style__result--1">
        <h3 className="heading-style">Like*</h3>
        {
          dataRs.like && dataRs.like.map((item, index) => (<span key={index + 1} className="result result--4">{item}</span>))
        }
      </div>
      <StyleResult title="Address Now*" value={dataRs.addressNow} />
      <StyleResult title="Phone*" value={dataRs.phone} />
      <StyleResult title="Email*" value={dataRs.email} />
    </div>
  );
};

Detail.propTypes = {
  dataRs: PropTypes.shape({
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

const mapStateToProps = (state, ownProps) => {
  return {
    dataRs: state.result,
  };
};

export default connect(mapStateToProps, null)(Detail);
