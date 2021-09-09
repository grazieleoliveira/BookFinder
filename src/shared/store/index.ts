import {applyMiddleware, compose, createStore} from 'redux';
import {getStoredState, persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';

import {reactotron} from '../../config/ReactotronConfig';

import reducers from './ducks';

import {FontState} from './ducks/font/types';
import {ThemeState} from './ducks/theme/types';

export interface ApplicationState {
  font: FontState;
  theme: ThemeState;
}

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debounce: 0.1,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [thunkMiddleware];

let composed = applyMiddleware(...middleware);

if (process.env.NODE_ENV !== 'production' || __DEV__) {
  composed = compose(
    applyMiddleware(...middleware),

    reactotron.createEnhancer(),
  );
}

export const store = createStore(persistedReducer, composed);
export const persistor = persistStore(store, null, () => {});

export function startStore() {
  getStoredState(persistConfig, (err, state) => {
    persistor.rehydrate(state);

    persistor.resume();
  });
}

export default store;
