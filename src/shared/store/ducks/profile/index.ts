export const Types = {
  SET_PROFILE: 'SET_PROFILE',
};

const INITIAL_STATE = {
  image: null,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.SET_PROFILE:
      return {
        ...state,
        currentUser: payload.currentUser,
      };

    default:
      return state;
  }
}

export const setProfileAction = (currentUser) => ({
  type: Types.SET_PROFILE,
  payload: {currentUser},
});
