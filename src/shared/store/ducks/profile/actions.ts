import {action} from 'typesafe-actions';
import {LoginProps, ProfileTypes, SetProfileProps, UserProps} from './types';

export const loginAction = (username: string, password: string): LoginProps =>
  action(ProfileTypes.LOGIN, {username, password});

export const setProfileAction = (currentUser: UserProps): SetProfileProps =>
  action(ProfileTypes.SET_PROFILE, {currentUser});
