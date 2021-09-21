import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PROFILE} from '../../constants/routeNames';
import {ApplicationState} from '../../store';

import {getBooksAction} from '../../store/ducks/books/actions';

import themes from '../../themes';
import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  const {currentUser} = useSelector((state: any) => state.profile);
  const {listBooks, loading} = useSelector((state: any) => state.books);
  const {delta} = useSelector((state: ApplicationState) => state.font);

  const [textSearch, setTextSearch] = useState<string>('');

  const dispatch = useDispatch();

  function handleNavigate() {
    console.tron.log(currentUser);
    navigation.navigate(PROFILE);
  }

  const getBooks = () => {
    console.tron.log('LIVRO', textSearch);
    dispatch(getBooksAction(textSearch));
  };

  const renderBook = ({item}) => {
    if (item.volumeInfo.imageLinks === undefined) {
      return null;
    }
    return (
      <S.BookView>
        <S.ImageInfoContainer>
          {item.volumeInfo.imageLinks !== undefined && (
            <S.ImageBook source={{uri: item.volumeInfo.imageLinks.thumbnail}} />
          )}
          <S.NewTitle fontSize={20}>{item.volumeInfo.title}</S.NewTitle>
        </S.ImageInfoContainer>
      </S.BookView>
    );
  };

  console.tron.log('listhome', listBooks);
  return (
    <S.Background>
      <S.Container>
        <S.Header>
          <S.NewTitle fontSize={36}>Explore</S.NewTitle>
          <S.ProfileIcon onPress={() => handleNavigate()}>
            {currentUser?.image !== '' && (
              <S.Image source={{uri: currentUser.image}} />
            )}
          </S.ProfileIcon>
        </S.Header>
        <S.SearchArea>
          <S.Touchable onPress={getBooks}>
            <S.MaterialIcon
              name="search"
              color={themes.light.Colors.GREY}
              size={themes.light.Sizes.ICON_SIZE}
            />
          </S.Touchable>
          <S.SearchInput
            placeholder="Find a book!"
            placeholderTextColor={themes.light.Colors.GREY}
            customFontSize={delta + 17}
            value={textSearch}
            onChangeText={setTextSearch}
          />
        </S.SearchArea>
        <S.List
          data={listBooks}
          extraData={listBooks}
          renderItem={renderBook}
          keyExtractor={(item: any) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 100}} />}
          // refreshing={loading}
          // onRefresh={() => getBooks()}
          // onEndReached={getBooks}
          // onEndReachedThreshold={0.2}
        />
      </S.Container>
    </S.Background>
  );
}
