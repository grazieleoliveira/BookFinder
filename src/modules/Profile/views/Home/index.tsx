import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonGlobal from '../../../../shared/components/ButtonGlobal';
import {HOME} from '../../../../shared/constants/routeNames';
import {setProfileAction} from '../../../../shared/store/ducks/profile';
import ModalOptionsCamera from '../../ModalOptionsCamera';

import * as S from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const {currentUser} = useSelector((state: any) => state.profile);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [imageProfile, setImageProfile] = useState('');

  const navigation = useNavigation();

  const setInformationUser = () => {
    setImageProfile(currentUser?.image);
  };
  useEffect(() => {
    if (currentUser) {
      setInformationUser();
    }
  }, [currentUser]);

  const setNewImage = (path: string) => {
    setImageProfile(path);
    setModalIsVisible(false);
  };

  const saveProfile = () => {
    dispatch(
      setProfileAction({
        image: imageProfile,
      }),
    );

    navigation.navigate(HOME);
  };

  return (
    <S.Container>
      <S.ContainerImage>
        <S.Touchable onPress={() => setModalIsVisible(true)}>
          {imageProfile ? (
            <S.Image source={{uri: imageProfile}} />
          ) : (
            <S.IconPerson />
          )}
          <S.ContainerIcon>
            <S.IconEdit />
          </S.ContainerIcon>
        </S.Touchable>
      </S.ContainerImage>
      <S.ButtonContainer>
        <ButtonGlobal action={saveProfile} title="Salvar" />
      </S.ButtonContainer>
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(true)}>
        <ModalOptionsCamera
          closeModal={() => setModalIsVisible(false)}
          setNewImage={setNewImage}
        />
      </Modal>
    </S.Container>
  );
};

export default Profile;
