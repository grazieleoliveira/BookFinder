import styled from 'styled-components/native';
import NewText from '../../components/Text';
import {s, vs} from '../../utils/responsibleText';

export const Background = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const MainTitle = styled(NewText)`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  text-align: center;
`;

export const Image = styled.Image`
  width: ${s(150)}px;
  height: ${s(225)}px;
`;
