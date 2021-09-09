import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import NewText from '../../components/Text';
import themes from '../../themes';
import {s} from '../../utils/responsibleText';

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
`;

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
`;

export const SearchInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.Colors.BORDER_PROFILE,
}))`
  font-size: ${({customFontSize}) => customFontSize}px;
  font-family: Roboto-Medium;
  width: 100%;
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
