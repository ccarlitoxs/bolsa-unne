import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import instaReducer from './InstagramDuck';
import authReducer from './Autenticacion/reducers';
import carritoReducer from './Carrito/reducers';
import commerceReducer from './Commerce/reducers';
import alertaReducer from './Alertas/reducers';

import {WatchFeedInsta} from './InstagramDuck';
import WatchRegistroUsuario from './Autenticacion/operations';
import WatchCommerce from './Commerce/operations';

export default combineReducers({
    auth: authReducer,
    instaFeed: instaReducer,
    carrito: carritoReducer,
    commerce: commerceReducer,
    alerta: alertaReducer
});

// Este sería index.js de la saga que combina todas las sagas
// importa {all} desde redux-saga
// all recibe un array de funciones
export function* rootSaga() {
    yield all([
        WatchFeedInsta(),
        WatchRegistroUsuario(),
        WatchCommerce()
    ]);
}
