import styled from 'styled-components/native';
import NewText from '../../components/Text';
import {s, vs} from '../../utils/responsibleText';

export const Background = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: 24px;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const Container = styled.View`
  align-items: center;
`;

export const MainTitle = styled(NewText)`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  text-align: center;
`;

export const DateAuthor = styled(NewText)`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  text-align: center;
`;

export const Image = styled.Image`
  width: ${s(150)}px;
  height: ${s(225)}px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ActivityContainer = styled.View`
  padding-top: ${s(150)}px;
`;

export const Description = styled(NewText)`
  font-family: Roboto-Regular;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  text-align: justify;
`;

export const ShowText = styled(NewText)`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.Colors.SHOW_BUTTON};
  align-self: flex-start;
`;

export const Footer = styled.View`
  height: ${s(100)}px;
`;

export const AboutText = styled(NewText)`
  margin-top: 12px;
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  align-self: flex-start;
`;

export const AboutInfos = styled(NewText)`
  font-family: Roboto-Medium;
  color: #848c8c;
  align-self: flex-start;
`;

export const AboutInfosText = styled(NewText)`
  font-family: Roboto-Regular;
  align-self: flex-start;
  color: ${({theme}) => theme.Colors.FONT_HOME};
`;

export const List = styled.FlatList``;
