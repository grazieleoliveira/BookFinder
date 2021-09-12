import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TextInputProps} from 'react-native';

import {useSelector} from 'react-redux';
import {sfs} from '../../utils/responsibleText';

import {ApplicationState} from '../../store';

import * as S from './styles';

interface InputProps {
  label?: string;
  iconRight?: string;
  iconLeft?: string;
  error?: any;
  labelSameLine?: boolean;
  actionIcon?: () => void;
}

const MyInput: React.FC<TextInputProps & InputProps> = ({
  label,
  iconRight,
  iconLeft,
  labelSameLine,
  error,
  actionIcon,
  ...rest
}) => {
  const {Sizes} = useContext(ThemeContext);
  const {delta} = useSelector((state: ApplicationState) => state.font);
  const fontSize = Sizes.FONTSIZE_INPUT;

  return (
    <S.InputContainer>
      <S.UserInputTitle fontSize={16 + delta}>{label}</S.UserInputTitle>
      <S.ContainerTextIcon>
        <S.UserInput
          {...rest}
          iconRight={iconRight}
          customFontSize={13 + delta}
        />
        {iconRight && (
          <S.Touchable onPress={() => actionIcon && actionIcon()}>
            <S.IconInput name={iconRight} />
          </S.Touchable>
        )}
      </S.ContainerTextIcon>
      <S.InputLine />
      {error && <S.ErrorMessage fontSize={sfs(12)}>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};
export default MyInput;
