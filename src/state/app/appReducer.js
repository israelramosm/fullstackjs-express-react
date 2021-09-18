import { UPDATE_USERNAME } from './appConstants';

const initialState = {
  username: 'username',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { username: action.payload };
    default:
      return state;
  }
};

export default appReducer;
