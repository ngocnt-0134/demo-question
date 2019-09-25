import React from 'react';
import  PropTypes  from 'prop-types';

class Detail extends React.Component {
    render() { 
        return (
            <React.Fragment>

            </React.Fragment>
          );
    }
}

Detail.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      genres: PropTypes.string,
      skill: PropTypes.string,
      address: PropTypes.string,
      like: PropTypes.array,
      addressNow: PropTypes.string,
      phone: PropTypes.number,
      email:PropTypes.string

    })
  };
export default Detail;