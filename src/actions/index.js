/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { SUBMIT_DATA } from './types';

export const sendData = (form) => {
  return { type: SUBMIT_DATA, payload: form };
};
