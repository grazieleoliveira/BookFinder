import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, View} from 'react-native';
import {useSelector} from 'react-redux';
import ButtonGlobal from '../../components/ButtonGlobal';
import {HOME, TABS_SCREEN} from '../../constants/routeNames';
import {ApplicationState} from '../../store';
import themes from '../../themes';

import * as S from './styles';

export function Login() {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate(HOME);
  };

  const {delta} = useSelector((state: ApplicationState) => state.font);
  return (
    <S.Background behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.Container>
        <S.Title fontSize={36 + delta}>Welcome</S.Title>
        <S.Subtitle fontSize={14 + delta}>
          Log in to start searching for your books.
        </S.Subtitle>
        <S.InputContainer>
          <S.UserInputTitle fontSize={16 + delta}>Username</S.UserInputTitle>
          <S.UserInput />
          <S.UserInputTitle fontSize={16 + delta}>Password</S.UserInputTitle>
          <S.UserInput />
        </S.InputContainer>
        <S.ButtonContainer>
          <ButtonGlobal action={login} title="Login" />
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
}
