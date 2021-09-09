import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';
import {AppRoutes} from './app.routes';
import {ApplicationState} from '../shared/store';
import {createTheme} from '../shared/utils/theme';
import * as S from './styles';

export function Routes() {
  const {theme} = useSelector((state: ApplicationState) => state.theme);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <S.StatusBar translucent={false} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
