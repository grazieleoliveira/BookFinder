import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

let reactotron;

const host = '192.168.0.113';

if (__DEV__) {
  reactotron = Reactotron.configure({host})
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  reactotron.clear();

  console.tron = reactotron;
}

export {reactotron};
