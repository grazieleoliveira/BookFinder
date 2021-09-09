import React from 'react';
import {useDispatch} from 'react-redux';

import {
  incrementFontSize,
  decrementFontSize,
  recoveryFontSize,
} from '../../store/ducks/font/actions';
import {toogleTheme} from '../../store/ducks/theme/actions';

import * as S from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Button onPress={() => dispatch(toogleTheme())}>
        <S.IconColor />
      </S.Button>
      <S.ContainerFont>
        <S.Button onPress={() => dispatch(decrementFontSize())}>
          <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
        </S.Button>
        <S.Button onPress={() => dispatch(recoveryFontSize())}>
          <S.RestoreFont>A</S.RestoreFont>
        </S.Button>
        <S.Button onPress={() => dispatch(incrementFontSize())}>
          <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
        </S.Button>
      </S.ContainerFont>
    </S.Container>
  );
};

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};

export default Header;
