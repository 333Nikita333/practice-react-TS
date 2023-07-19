import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filrer/slice';
import { AuthState } from '../types/interfaces';

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
