export const Types = {
  SET_PROFILE: 'SET_PROFILE',
  LOGIN: 'LOGIN',
};

const INITIAL_STATE = {
  isLoggedIn: true,
  username: null,
  password: null,
  currentUser: {
    fullName: null,
    age: null,
    favoriteBook: null,
    currentlyReading: null,
    image: null,
  },
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: payload.username,
        password: payload.password,
      };
    case Types.SET_PROFILE:
      return {
        ...state,
        currentUser: payload.currentUser,
      };

    default:
      return state;
  }
}

export const loginAction = (username, password) => ({
  type: Types.LOGIN,
  payload: {username, password},
});

export const setProfileAction = (currentUser) => ({
  type: Types.SET_PROFILE,
  payload: {currentUser},
});
