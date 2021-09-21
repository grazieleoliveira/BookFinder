import {Reducer} from 'redux';
import {ProfileState, ProfileTypes} from './types';

const INITIAL_STATE: ProfileState = {
  isLoggedIn: true,
  username: '',
  password: '',
  currentUser: {
    fullName: '',
    age: '',
    favBook: '',
    currentlyReading: '',
    image: '',
  },
};

const reducer: Reducer<ProfileState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case ProfileTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: payload.username,
        password: payload.password,
      };
    case ProfileTypes.SET_PROFILE:
      return {
        ...state,
        currentUser: payload.currentUser,
      };

    default:
      return state;
  }
};

export default reducer;
