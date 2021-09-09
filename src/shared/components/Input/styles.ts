import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '../Icon';
import Text from '../Text';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface ContainerProps {
  labelSameLine?: boolean;
}

interface ContainerInputProps {
  error: string;
  labelSameLine?: boolean;
}

interface TextInputProps {
  customFontSize: number;
  iconRight?: string;
}

export const InputWrapper = styled.View``;

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const Label = styled(Text).attrs(({theme}) => ({
  fontSize: theme.Sizes.FONTSIZE_INPUT_LABEL,
}))`
  color: ${({theme}) => theme.Colors.FONT_INPUT};
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  flex-direction: row;
  border-color: ${({theme, error}) =>
    error ? theme.Colors.ERROR : theme.Colors.MEDIUM_GRAY};
  background-color: ${({theme}) => theme.Colors.WHITE};
  margin-top: ${({labelSameLine}) => (labelSameLine ? 0 : 10)}px;
  margin-left: ${({labelSameLine}) => (labelSameLine ? 15 : 0)}px;
  width: ${({labelSameLine}) => (labelSameLine ? '65%' : '100%')};
  border-radius: 2px;
  border-bottom-width: 1px;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View<ContainerProps>`
  width: 90%;
  flex-direction: ${({labelSameLine}) => (labelSameLine ? 'row' : 'column')};
  align-items: ${({labelSameLine}) =>
    labelSameLine ? 'center' : 'flex-start'};
  justify-content: center;
`;

export const Input = styled.TextInput.attrs<TextInputProps>(
  ({customFontSize}) => ({
    fontSize: customFontSize,
  }),
)<TextInputProps>`
  width: ${({iconRight}) => (iconRight ? 90 : 100)}%;
  margin-bottom: ${vs(10)}px;
  margin-left: 10px;
`;
export const ErrorMessage = styled(Text)`
  color: ${({theme}) => theme.Colors.ERROR};
  margin-top: 15px;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({theme, name, iconType}) => ({
    name,
    size: theme.Sizes.ICON_SIZE,
    type: iconType,
  }),
)<IconInputProps>`
  color: ${({iconColor, theme}) => iconColor || theme.Colors.COLOR_APLICATION};
`;
