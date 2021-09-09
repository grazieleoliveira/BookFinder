import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';

import Icon from '../../../shared/components/Icon';
import Text from '../../../shared/components/Text';

import {sfs} from '../../../shared/utils/responsibleText';

export const Container = styled.TouchableOpacity`
  background-color: rgba(96, 96, 96, 0.8);
  flex: 1;
  padding: ${s(10)}px;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  background-color: ${({theme}) => theme.Colors.BACKGROUND_MODAL};
  padding: ${s(20)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${vs(10)}px;
  width: 100%;
`;

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${vs(10)}px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${vs(50)}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.BUTTON_CANCEL};
  justify-content: center;
  align-items: center;
  border-radius: ${vs(10)}px;
  margin-top: ${vs(10)}px;
`;

export const ButtonText = styled(Text)`
  font-size: ${sfs(20)}px;
  font-family: Roboto-Regular;
  color: ${({theme}) => theme.Colors.BUTTON_CANCEL};
`;

export const IconsModal = styled(Icon)`
  font-size: ${sfs(30)}px;
  color: ${({theme}) => theme.Colors.DEFAULT_FONT};
`;

export const Title = styled(Text)`
  font-family: Roboto-Regular;
  margin-left: ${s(10)}px;
  font-size: ${sfs(18)}px;
  color: ${({theme}) => theme.Colors.TEXT_CLICKABLE};
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: 'rgba(96, 96, 96, 0.8)',
})``;
