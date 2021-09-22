import {useRoute} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import * as S from './styles';

export function BookInfo() {
  const route = useRoute();
  const {item} = route.params;
  const {book, loading} = useSelector((state: ApplicationState) => state.books);
  return (
    <S.Background>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <S.MainTitle fontSize={24}>{book.volumeInfo.title}</S.MainTitle>
          <S.Image source={{uri: book.volumeInfo.imageLinks.thumbnail}} />
        </>
      )}
    </S.Background>
  );
}
