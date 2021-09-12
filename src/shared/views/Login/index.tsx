import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import ButtonGlobal from '../../components/ButtonGlobal';
import {HOME} from '../../constants/routeNames';
import {ApplicationState} from '../../store';
import validationSchema from './validations';

import * as S from './styles';
import MyInput from '../../components/MyInput';
import {loginAction, setProfileAction} from '../../store/ducks/profile';

interface DataFormProps {
  username: string;
  password: string;
}

export function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const login = (username, password) => {
    dispatch(loginAction(username, password));
    navigation.navigate(HOME);
  };

  const {handleSubmit, dirty, handleChange, values, errors} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => login(values.username, values.password),
    validateOnChange: false,
  });

  const {delta} = useSelector((state: ApplicationState) => state.font);
  return (
    <S.Background behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.Container>
        <S.Title fontSize={36 + delta}>Welcome</S.Title>
        <S.Subtitle fontSize={14 + delta}>
          Log in to start searching for your books.
        </S.Subtitle>
        <S.InputContainer>
          <MyInput
            label="Username"
            value={values.username}
            onChangeText={handleChange('username')}
            error={errors.username}
          />
          <MyInput
            label="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            error={errors.password}
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <ButtonGlobal disabled={!dirty} action={handleSubmit} title="Login" />
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
}
