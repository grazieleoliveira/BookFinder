import {useRoute} from '@react-navigation/core';
import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {Info} from './components/Info';
import * as S from './styles';

export function BookInfo() {
  const route = useRoute();
  const {item} = route.params;
  const {book, loading} = useSelector((state: ApplicationState) => state.books);
  const [moreText, setMoreText] = useState(false);
  return (
    <S.Background>
      <S.Container>
        {loading ? (
          <S.ActivityContainer>
            <ActivityIndicator size="large" />
          </S.ActivityContainer>
        ) : (
          <>
            <S.MainTitle fontSize={24}>{book.volumeInfo.title}</S.MainTitle>
            {/* <S.DateAuthor fontSize={13}>
              Release date:{' '}
              {book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate.toString().slice(0, 4)
                : 'Unknown date'}
              {' · '}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors[0]
                : 'Unknown author'}
            </S.DateAuthor> */}
            <S.Image source={{uri: item.volumeInfo.imageLinks.thumbnail}} />

            {/* Had to use the description from the book list in here, because sometimes it is not
            the same as the individual volume description. */}
            <S.Description numberOfLines={!moreText ? 3 : 0} fontSize={13}>
              {item.volumeInfo.description
                ? item.volumeInfo.description
                : 'No description'}
            </S.Description>
            {item.volumeInfo.description && (
              <S.ShowText fontSize={12} onPress={() => setMoreText(!moreText)}>
                {moreText ? '...show less' : '...show more'}
              </S.ShowText>
            )}
            <S.AboutText fontSize={20}>About this title</S.AboutText>
            <Info
              title="Author"
              content={`${
                book.volumeInfo.authors
                  ? book.volumeInfo.authors[0]
                  : 'Unknown author'
              }`}
            />
            <Info
              title="Year"
              content={`${
                book.volumeInfo.publishedDate
                  ? book.volumeInfo.publishedDate.toString().slice(0, 4)
                  : 'Unknown date'
              }`}
            />
            <Info
              title="Publisher"
              content={`${
                book.volumeInfo.publisher
                  ? book.volumeInfo.publisher
                  : 'Unknown publisher'
              }`}
            />
            <Info
              title="Page count"
              content={`${
                book.volumeInfo.pageCount
                  ? book.volumeInfo.pageCount
                  : 'Unknown page number'
              }`}
            />
            <Info
              title="Categories"
              content={`${
                book.volumeInfo.categories
                  ? book.volumeInfo.categories[0]
                  : 'Unknown category'
              }`}
            />
          </>
        )}
      </S.Container>
      <S.Footer />
    </S.Background>
  );
}
