import {useNavigation} from '@react-navigation/core';
import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonGlobal from '../../../../shared/components/ButtonGlobal';
import MyInput from '../../../../shared/components/MyInput';
import {HOME} from '../../../../shared/constants/routeNames';
import {setProfileAction} from '../../../../shared/store/ducks/profile';
import ModalOptionsCamera from '../../ModalOptionsCamera';

import * as S from './styles';
import validationSchema from './validations';

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const {currentUser} = useSelector((state: any) => state.profile);

  const [fullNameCurrent, setFullNameCurrent] = useState('');
  const [ageCurrent, setAgeCurrent] = useState('');
  const [favBookCurrent, setFavBookCurrent] = useState('');
  const [currentlyReadingCurrent, setCurrentlyReadingCurrent] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [imageProfile, setImageProfile] = useState('');

  const navigation = useNavigation();

  const setInformationUser = () => {
    setImageProfile(currentUser?.image);
    setFullNameCurrent(currentUser?.fullName);
    setAgeCurrent(currentUser?.age);
    setFavBookCurrent(currentUser?.favBook);
    setCurrentlyReadingCurrent(currentUser?.currentlyReading);
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

  const saveProfile = (fullName, age, favBook, currentlyReading) => {
    dispatch(
      setProfileAction({
        fullName,
        age,
        favBook,
        currentlyReading,
        image: imageProfile,
      }),
    );

    navigation.navigate(HOME);
  };

  const {handleSubmit, dirty, handleChange, values, errors} = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      favBook: '',
      currentlyReading: '',
    },
    validationSchema,
    onSubmit: () =>
      saveProfile(
        values.fullName,
        values.age,
        values.favBook,
        values.currentlyReading,
      ),
    validateOnChange: false,
  });

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
      <MyInput
        placeholder={fullNameCurrent}
        label="Name"
        value={values.fullName}
        onChangeText={handleChange('fullName')}
        error={errors.fullName}
      />
      <MyInput
        placeholder={ageCurrent}
        label="Age"
        value={values.age}
        onChangeText={handleChange('age')}
        error={errors.age}
      />
      <MyInput
        placeholder={favBookCurrent}
        label="Favorite Book"
        value={values.favBook}
        onChangeText={handleChange('favBook')}
        error={errors.favBook}
      />
      <MyInput
        placeholder={currentlyReadingCurrent}
        label="Currently Reading"
        value={values.currentlyReading}
        onChangeText={handleChange('currentlyReading')}
        error={errors.currentlyReading}
      />
      <S.ButtonContainer>
        <ButtonGlobal action={handleSubmit} title="Salvar" />
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
