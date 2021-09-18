/* eslint-disable import/prefer-default-export */
import { UPDATE_USERNAME } from './appConstants';

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  payload: username,
});
