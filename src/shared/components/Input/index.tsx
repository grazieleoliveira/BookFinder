import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TextInputProps} from 'react-native';

import {useSelector} from 'react-redux';
import {sfs} from '../../utils/responsibleText';

import * as S from './styles';
import {ApplicationState} from '../../store';

interface InputProps {
  label?: string;
  iconRight?: string;
  iconLeft?: string;
  error?: any;
  labelSameLine?: boolean;
  actionIcon?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
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
    <S.InputWrapper>
      <S.ContainerInputIcon>
        {iconLeft && <S.IconInput name={iconLeft} />}
        <S.Container labelSameLine={labelSameLine}>
          {label && <S.Label fontSize={sfs(9)}>{label}</S.Label>}
          <S.ContainerInput error={error} labelSameLine={labelSameLine}>
            <S.Input
              {...rest}
              customFontSize={fontSize + delta}
              iconRight={iconRight}
            />
            {iconRight && (
              <S.Touchable onPress={() => actionIcon && actionIcon()}>
                <S.IconInput name={iconRight} />
              </S.Touchable>
            )}
          </S.ContainerInput>
        </S.Container>
      </S.ContainerInputIcon>
      {error && <S.ErrorMessage fontSize={sfs(7)}>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
export default Input;
