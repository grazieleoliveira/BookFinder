import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import NewText from '../../components/Text';
import themes from '../../themes';
import {s, vs} from '../../utils/responsibleText';

export const Background = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const Container = styled.View`
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: ${themes.light.Sizes.FONTSIZE_TITLE};
  font-family: Roboto-Medium;
`;

export const NewTitle = styled(NewText)`
  font-family: Roboto-Medium;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  flex-shrink: 1;
  flex-wrap: wrap;
  margin-right: ${s(100)}px;
`;

export const Touchable = styled.TouchableOpacity``;

export const ProfileIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${s(48)}px;
  height: ${s(48)}px;
  background-color: ${({theme}) => theme.Colors.BACKGROUND_INPUT};
  border-radius: 50;
  border: 2px solid ${({theme}) => theme.Colors.BORDER_PROFILE};
`;

export const SearchArea = styled.View`
  margin-top: 34px;
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.Colors.BACKGROUND_INPUT};
  border-radius: 10px;
  font-size: 16px;
  padding-left: 16px;
  flex-direction: row;
  border: 2px solid ${({theme}) => theme.Colors.BORDER_SEARCH};
  align-items: center;
  margin-bottom: 10px;
`;

export const SearchInput = styled.TextInput`
  font-size: ${({customFontSize}) => customFontSize}px;
  font-family: Roboto-Medium;
  width: 100%;
  color: ${({theme}) => theme.Colors.FONT_HOME};
`;

export const MaterialIcon = styled(Icon)`
  color: ${({theme}) => theme.Colors.BORDER_PROFILE};
  padding-right: 5px;
`;

export const Image = styled.Image`
  width: ${s(48)}px;
  height: ${s(48)}px;
  border-radius: ${s(65)}px;
`;

export const ImageContainer = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
`;

export const List = styled.FlatList`
  width: 100%;
`;

export const BookView = styled.TouchableOpacity`
  padding: 20px 10px 20px 10px;
  width: 100%;
`;

export const ImageBook = styled.Image`
  width: ${s(100)}px;
  height: ${s(150)}px;
`;

export const ImageInfoContainer = styled.View`
  flex-direction: row;
`;

export const TitleDescriptionContainer = styled.View`
  padding-left: 20px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Description = styled(NewText)`
  margin-top: 6px;
  margin-bottom: 5px;
  font-family: Roboto-Regular;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  flex-shrink: 1;
  flex-wrap: wrap;
  margin-right: ${s(100)}px;
`;

export const PublishedDate = styled(NewText)`
  font-family: Roboto-Regular;
  color: ${({theme}) => theme.Colors.FONT_HOME};
  margin-right: ${s(100)}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const IndicatorContainer = styled.View`
  padding-top: 50px;
`;
