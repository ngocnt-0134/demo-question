/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import { SUBMIT_DATA } from '../actions/types';

const initState = {
  name: '',
  genres: '',
  skill: '',
  address: '',
  like: [],
  addressNow: '',
  phone: '',
  email: '',
};
const result = (state = initState, action) => {
  switch (action.type) {
    case SUBMIT_DATA:
      return { ...state ? action.payload : '' };
    default:
      return state;
  }
};

export default result;
