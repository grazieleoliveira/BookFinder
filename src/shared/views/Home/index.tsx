import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {PROFILE} from '../../constants/routeNames';
import {ApplicationState} from '../../store';

import themes from '../../themes';
import * as S from './styles';

export function Home() {
  const navigation = useNavigation();
  const {currentUser} = useSelector((state: any) => state.profile);

  function handleNavigate() {
    navigation.navigate(PROFILE);
  }
  const {delta} = useSelector((state: ApplicationState) => state.font);
  return (
    <S.Background>
      <S.Container>
        <S.Header>
          <S.NewTitle fontSize={36}>Explore</S.NewTitle>
          <S.ProfileIcon onPress={() => handleNavigate()}>
            {currentUser.image && <S.Image source={{uri: currentUser.image}} />}
          </S.ProfileIcon>
        </S.Header>
        <S.SearchArea>
          <S.MaterialIcon
            name="search"
            color={themes.light.Colors.GREY}
            size={themes.light.Sizes.ICON_SIZE}
          />
          <S.SearchInput
            placeholder="Find a book!"
            placeholderTextColor={themes.light.Colors.GREY}
            customFontSize={delta + 17}
          />
        </S.SearchArea>
      </S.Container>
    </S.Background>
  );
}
