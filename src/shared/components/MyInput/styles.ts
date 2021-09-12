import styled from 'styled-components/native';
import NewText from '../Text';

import Icon from '../../components/Icon';
import Text from '../../components/Text';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface TextInputProps {
  customFontSize: number;
  iconRight?: string;
}

export const ContainerTextIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0px;
`;
export const InputContainer = styled.View`
  width: 100%;
`;

export const UserInput = styled.TextInput.attrs<TextInputProps>(
  ({customFontSize}) => ({
    fontSize: customFontSize,
  }),
)<TextInputProps>`
  width: ${({iconRight}) => (iconRight ? 90 : 100)}%;
  padding: 6px;
`;

export const InputLine = styled.View`
  border-bottom-width: 1;
  border-color: ${({theme}) => theme.Colors.BORDER};
`;

export const UserInputTitle = styled(NewText)`
  padding-top: 24px;
  color: ${({theme}) => theme.Colors.INPUT_COLOR};
  font-family: Roboto-Regular;
`;

export const Touchable = styled.TouchableOpacity``;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({theme, name, iconType}) => ({
    name,
    size: theme.Sizes.ICON_SIZE,
    type: iconType,
  }),
)<IconInputProps>`
  color: ${({iconColor, theme}) => iconColor || theme.Colors.BORDER};
  align-self: flex-end;
`;

export const ErrorMessage = styled(Text)`
  color: ${({theme}) => theme.Colors.ERROR};
  margin-top: 6px;
  margin-left: 6px;
`;
