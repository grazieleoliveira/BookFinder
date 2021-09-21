import {Action} from 'redux';

export enum ProfileTypes {
  SET_PROFILE = '@profile/SET_PROFILE',
  LOGIN = '@profile/LOGIN',
}

export interface UserProps {
  fullName: string;
  age: string;
  favBook: string;
  currentlyReading: string;
  image: string;
}

export interface ProfileState {
  isLoggedIn: boolean;
  username: string;
  password: string;
  currentUser: UserProps;
}

export interface LoginProps extends Action {
  type: ProfileTypes.LOGIN;
  payload: {username: string; password: string};
}

export interface SetProfileProps extends Action {
  type: ProfileTypes.SET_PROFILE;
  payload: {currentUser: UserProps};
}
