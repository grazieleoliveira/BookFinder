import {PermissionsAndroid} from 'react-native';

async function requestPermissionAndroid() {
  let permissionCamera = false;
  let permissionStorage = false;

  permissionStorage = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );
  permissionCamera = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );

  if (!permissionStorage) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      permissionStorage = granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      permissionStorage = false;
    }
  }

  if (!permissionCamera) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      permissionCamera = granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      permissionCamera = false;
    }
  }
  if (permissionStorage && permissionCamera) {
    return true;
  }
  return false;
}

export async function requestPermission(isIos: boolean) {
  if (isIos) {
    return true;
  }
  const permission = await requestPermissionAndroid();
  return permission;
}
