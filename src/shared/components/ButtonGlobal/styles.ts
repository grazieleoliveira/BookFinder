/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import {s, vs} from 'react-native-size-matters';

import Icon from '../Icon';
import Text from '../Text';

interface StatusProps {
  color: 'FEEDBACK_CORRECT' | 'ERROR' | 'FEEDBACK_WARNING' | 'COLOR_APLICATION';
}

interface ButtonTypesProps {
  success: StatusProps;
  error: StatusProps;
  warning: StatusProps;
  primary: StatusProps;
}

const buttonTypes: ButtonTypesProps = {
  success: {
    color: 'FEEDBACK_CORRECT',
  },
  error: {
    color: 'ERROR',
  },
  warning: {
    color: 'FEEDBACK_WARNING',
  },
  primary: {
    color: 'COLOR_APLICATION',
  },
};
interface ButtonTextProps {
  buttonType?: string;
  status: 'primary' | 'error' | 'success' | 'warning';
}

interface IconProps {
  buttonType?: string;
  status: 'primary' | 'error' | 'success' | 'warning';
}

interface ButtonProps {
  buttonType?: string;
  status: 'primary' | 'error' | 'success' | 'warning';
}

export const Button = styled(Pressable).attrs<ButtonProps>(
  ({buttonType, theme}) => ({
    android_ripple: {
      color:
        buttonType === 'outline'
          ? theme.Colors.COLOR_APLICATION
          : theme.Colors.LIGHT_GRAY,
      borderless: false,
      radius: 18,
    },
  }),
)<ButtonProps>`
  background-color: ${({theme, disabled, buttonType, status}) =>
    disabled
      ? theme.Colors.GRANITE
      : buttonType === 'outline'
      ? 'transparent'
      : theme.Colors.BUTTON_BACKGROUND};
  border-color: ${({theme, status, disabled}) =>
    disabled ? theme.Colors.GRANITE : theme.Colors.BORDER};
  padding: ${vs(10)}px ${s(20)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  border-width: 1px;
`;

export const ButtonText = styled(Text).attrs<ButtonTextProps>(({theme}) => ({
  fontSize: theme.Sizes.FONTSIZE_BUTTON_TITLE,
}))<ButtonTextProps>`
  color: ${({theme, buttonType, status}) =>
    buttonType === 'outline'
      ? theme.Colors[buttonTypes[status].color]
      : theme.Colors.BUTTON_TEXT};
  text-align: center;
`;

export const IconButton = styled(Icon).attrs(({theme}) => ({
  size: theme.Sizes.ICON_SIZE_BUTTON,
}))<IconProps>`
  margin-right: 15px;
  color: ${({theme, buttonType, status}) =>
    buttonType === 'outline'
      ? theme.Colors[buttonTypes[status].color]
      : theme.Colors.WHITE};
`;
