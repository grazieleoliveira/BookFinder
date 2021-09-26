import React from 'react';
import {TextProps} from 'react-native';
import {useSelector} from 'react-redux';

import {ApplicationState} from '../../store';

import * as S from './styles';

interface NewTextProps extends TextProps {
  fontSize?: number;
}

const NewText: React.FC<NewTextProps> = ({
  fontSize = 16,
  children,
  ...rest
}) => {
  const {delta} = useSelector((state: ApplicationState) => state.font);

  return (
    <S.Text {...rest} customFontSize={fontSize + delta}>
      {children}
    </S.Text>
  );
};

export default NewText;
