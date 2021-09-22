import React from 'react';
import {createStackNavigator} from '@react-navigation/stack/';

import {Login} from '../shared/views/Login';
import {
  BOOK_INFO,
  HOME,
  LOGIN,
  PROFILE,
  TABS_SCREEN,
} from '../shared/constants/routeNames';
import themes from '../shared/themes';
import Header from '../shared/components/Header';
import Tabs from './tabNavigators';
import Profile from '../modules/Profile/views/Home';
import {Home} from '../shared/views/Home';
import {BookInfo} from '../shared/views/BookInfo';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        cardStyle: {
          backgroundColor: themes.light.Colors.WHITE,
        },
      }}>
      <Screen
        name={LOGIN}
        component={Login}
        options={{
          header: () => <Header />,
        }}
      />

      <Screen
        name={PROFILE}
        component={Profile}
        options={{
          header: () => <Header />,
        }}
      />

      <Screen
        name={HOME}
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />

      <Screen
        name={BOOK_INFO}
        component={BookInfo}
        options={{
          header: () => <Header />,
        }}
      />
      {/* currently not using the bottom tab navigator, won't delete the code for study purposes. */}
      {/* <Screen
        name={TABS_SCREEN}
        component={Tabs}
        options={{
          header: () => <Header />,
        }}
      /> */}
    </Navigator>
  );
}
