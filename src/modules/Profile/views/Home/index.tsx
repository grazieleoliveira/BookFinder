import {useNavigation} from '@react-navigation/core';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonGlobal from '../../../../shared/components/ButtonGlobal';
import MyInput from '../../../../shared/components/MyInput';
import {HOME} from '../../../../shared/constants/routeNames';
import {ApplicationState} from '../../../../shared/store';
import {setProfileAction} from '../../../../shared/store/ducks/profile/actions';
import ModalOptionsCamera from '../../ModalOptionsCamera';

import * as S from './styles';
import validationSchema from './validations';

interface DataProps {
  fullName: string;
  age: string;
  favBook: string;
  currentlyReading: string;
  image: string;
}

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const {currentUser} = useSelector((state: ApplicationState) => state.profile);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const navigation = useNavigation();

  const saveProfile = (data: DataProps) => {
    dispatch(
      setProfileAction({
        fullName: data.fullName,
        age: data.age,
        favBook: data.favBook,
        currentlyReading: data.currentlyReading,
        image: data.image,
      }),
    );

    navigation.navigate(HOME);
  };

  const {handleSubmit, dirty, handleChange, values, errors, setFieldValue} =
    useFormik({
      initialValues: {
        fullName: currentUser.fullName,
        age: currentUser.age,
        favBook: currentUser.favBook,
        currentlyReading: currentUser.currentlyReading,
        image: currentUser.image,
      },
      validationSchema,
      onSubmit: saveProfile,
      validateOnChange: false,
    });

  const setNewImage = (path: string) => {
    setFieldValue('image', path);
    setModalIsVisible(false);
  };

  return (
    <S.Container>
      <S.ContainerImage>
        <S.Touchable onPress={() => setModalIsVisible(true)}>
          {values.image ? (
            <S.Image source={{uri: values.image}} />
          ) : (
            <S.IconPerson />
          )}
          <S.ContainerIcon>
            <S.IconEdit />
          </S.ContainerIcon>
        </S.Touchable>
      </S.ContainerImage>
      <MyInput
        label="Name"
        value={values.fullName}
        onChangeText={handleChange('fullName')}
        error={errors.fullName}
      />
      <MyInput
        label="Age"
        value={values.age}
        onChangeText={handleChange('age')}
        error={errors.age}
      />
      <MyInput
        label="Favorite Book"
        value={values.favBook}
        onChangeText={handleChange('favBook')}
        error={errors.favBook}
      />
      <MyInput
        label="Currently Reading"
        value={values.currentlyReading}
        onChangeText={handleChange('currentlyReading')}
        error={errors.currentlyReading}
      />
      <S.ButtonContainer>
        <ButtonGlobal disabled={!dirty} action={handleSubmit} title="Salvar" />
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
