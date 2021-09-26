import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BookInfo} from '../../../dtos';
import {BOOK_INFO, PROFILE} from '../../constants/routeNames';
import {ApplicationState} from '../../store';

import {
  getBookInfoAction,
  getBooksAction,
} from '../../store/ducks/books/actions';

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
    navigation.navigate(PROFILE);
  }

  const getBooks = () => {
    if (!loading) {
      dispatch(getBooksAction(textSearch));
    }
  };

  const getBook = (item: BookInfo) => {
    dispatch(getBookInfoAction(item.id));
    navigation.navigate(BOOK_INFO, {item});
  };

  const renderBook = ({item}) => {
    if (item.volumeInfo.imageLinks === undefined) {
      return null;
    }
    return (
      <S.BookView onPress={() => getBook(item)} activeOpacity={0.7}>
        <S.ImageInfoContainer>
          <S.ImageBook source={{uri: item.volumeInfo.imageLinks.thumbnail}} />
          <S.TitleDescriptionContainer>
            <S.NewTitle numberOfLines={1} fontSize={20}>
              {item.volumeInfo.title}
            </S.NewTitle>
            <S.PublishedDate numberOfLines={1} fontSize={12}>
              {item.volumeInfo.publishedDate
                ? item.volumeInfo.publishedDate.toString().slice(0, 4)
                : 'Unknown date'}
              , by{' '}
              {item.volumeInfo.authors
                ? item.volumeInfo.authors[0]
                : 'Unknown author'}
            </S.PublishedDate>
            <S.Description numberOfLines={3} fontSize={13}>
              {item.volumeInfo.description
                ? item.volumeInfo.description
                : 'No description'}
            </S.Description>
          </S.TitleDescriptionContainer>
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
          <S.MaterialIcon
            name="search"
            color={themes.light.Colors.GREY}
            size={themes.light.Sizes.ICON_SIZE}
          />
          <S.SearchInput
            placeholder="Find a book!"
            placeholderTextColor={themes.light.Colors.GREY}
            customFontSize={delta + 17}
            value={textSearch}
            onChangeText={setTextSearch}
            onSubmitEditing={getBooks}
          />
        </S.SearchArea>
        {loading ? (
          <S.IndicatorContainer>
            <ActivityIndicator size="large" />
          </S.IndicatorContainer>
        ) : (
          <S.List
            data={listBooks}
            extraData={listBooks}
            renderItem={renderBook}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{height: 150}} />}
            initialNumToRender={3}
            // refreshing={loading}
            // onRefresh={() => getBooks()}
            // onEndReached={getBooks}
            // onEndReachedThreshold={0.2}
          />
        )}
      </S.Container>
    </S.Background>
  );
}
