import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';

import Icon from '../../shared/components/Icon';
import Text from '../../shared/components/Text';

interface TitleScreenProps {
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  padding-top: ${vs(6)}px;
  padding-bottom: ${vs(6)}px;
  background-color: ${(props) => props.theme.Colors.COLOR_APLICATION};
`;

export const ContainerTab = styled.View`
  flex: 1;
`;

export const IconTab = styled(Icon).attrs(({isFocused, theme}) => ({
  color: isFocused ? theme.Colors.WHITE : theme.Colors.GRAY,
}))`
  font-size: ${s(25)}px;
  padding-bottom: 8px;
`;

export const TitleScreen = styled(Text)<TitleScreenProps>`
  font-size: ${s(15)}px;
  color: ${(props) => props.color};
`;

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;
