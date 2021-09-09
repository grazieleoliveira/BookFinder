import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../../modules/Profile/views/Home';

import {PROFILE} from '../../../shared/constants/routeNames';

const {Navigator, Screen} = createStackNavigator();

const ProfileStack: React.FC = () => (
  <Navigator>
    <Screen name={PROFILE} component={Profile} options={{headerShown: false}} />
  </Navigator>
);

export default ProfileStack;
