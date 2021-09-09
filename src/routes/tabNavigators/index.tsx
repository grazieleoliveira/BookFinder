import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StatusBar} from 'react-native';
import {HOME_TAB, PROFILE_TAB} from '../../shared/constants/routeNames';

import BottomTab from '../../routes/bottomTab';

import Navigators from '../../routes/stackNavigators';

import themes from '../../shared/themes';

import * as S from './styles';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <>

      <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
        <Tab.Screen
          name={HOME_TAB}
          options={{headerShown: false}}
          component={Navigators.Home}
        />
        <Tab.Screen
          name={PROFILE_TAB}
          options={{headerShown: false}}
          component={Navigators.Profile}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
