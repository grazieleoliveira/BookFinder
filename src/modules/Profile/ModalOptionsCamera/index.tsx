import React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {Platform} from 'react-native';

import {requestPermission} from '../../../shared/utils/permissions';
import {messageAlert} from '../../../shared/utils/alert';

import * as S from './styles';

interface ModalOptionsCameraProps {
  closeModal: () => void;
  setNewImage: (path: string) => void;
}

const ModalOptionsCamera: React.FC<ModalOptionsCameraProps> = ({
  closeModal,
  setNewImage,
}) => {
  const selectImage = async () => {
    const isIOS = Platform.OS === 'ios';

    const acceptedPermissions = await requestPermission(isIOS);

    if (acceptedPermissions) {
      ImagePicker.launchImageLibrary(
        {mediaType: 'photo'},
        (response: ImagePicker.ImagePickerResponse) => {
          if (!response.didCancel) {
            console.tron.log('res', response);
            const newImage = response?.assets[0];
            const image = {
              name: Platform.OS === 'ios' ? 'foto.jpg' : newImage.fileName,
              path: isIOS
                ? newImage.uri.substring(newImage.uri.indexOf(':') + 3)
                : newImage.uri,
              type: newImage.type,
            };
            setNewImage(image.path);
          } else if (response.errorMessage) {
            messageAlert('Ocorreu um erro ao selecionar a foto.');
          }
        },
      );
    } else {
      messageAlert(
        'Você não têm as permissões nessárias, é preciso aceitar todas as permissões para prosseguir.',
      );
    }
  };

  const takePhoto = async () => {
    const isIOS = Platform.OS === 'ios';
    const acceptedPermissions = await requestPermission(isIOS);

    if (acceptedPermissions) {
      ImagePicker.launchCamera(
        {mediaType: 'photo'},
        (response: ImagePicker.ImagePickerResponse) => {
          if (!response.didCancel) {
            const newImage = response?.assets[0];

            const image = {
              name: Platform.OS === 'ios' ? 'foto.jpg' : newImage.fileName,
              path: newImage.uri,
              type: newImage.type,
            };
            setNewImage(image.path);
          }
          if (response.errorMessage) {
            messageAlert('Ocorreu um erro ao selecionar a foto.');
          }
        },
      );
    } else {
      messageAlert(
        'Você não têm as permissões nessárias, é preciso aceitar todas as permissões para prosseguir.',
      );
    }
  };

  return (
    <S.Container onPress={() => closeModal()}>
      <S.StatusBar />
      <S.Main>
        <S.Touchable onPress={() => takePhoto()}>
          <S.IconsModal name="camera" />
          <S.Title>Câmera</S.Title>
        </S.Touchable>

        <S.Touchable onPress={() => selectImage()}>
          <S.IconsModal name="images" type="ionicons" />
          <S.Title>Galeria</S.Title>
        </S.Touchable>
        <S.Button onPress={() => closeModal()}>
          <S.ButtonText>CANCELAR</S.ButtonText>
        </S.Button>
      </S.Main>
    </S.Container>
  );
};

export default ModalOptionsCamera;
