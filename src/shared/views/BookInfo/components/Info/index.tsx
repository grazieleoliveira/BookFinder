import React from 'react';
import * as S from './styles';

interface InfoProps {
  title: string;
  content: string;
}

export const Info: React.FC<InfoProps> = ({title, content}) => {
  return (
    <S.AboutInfos fontSize={13}>
      {title}: <S.AboutInfosText fontSize={13}>{content}</S.AboutInfosText>
    </S.AboutInfos>
  );
};
