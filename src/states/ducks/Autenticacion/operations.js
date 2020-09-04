//OPERATIONS, utilizando una saga, aca van cada saga y se combinan en el function FeedInsta
import { put,call,takeLatest } from 'redux-saga/effects';
import apiCall from '../../api';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR  ,
    OBTENER_USUARIO ,
    LOGUEANDO_USUARIO,
    LOGIN_ERROR     ,
    LOGIN_EXITOSO   ,
    REGISTRANDO_USUARIO,
    CARGANDO_LOGIN,
    AUTENTICANDO_USUARIO

} from './types';

export function* RegistrarUsuario( payload ) {


    try {
        yield put({type: CARGANDO_LOGIN});
        const rdo = yield call(apiCall, 'apiNode','/api/usuarios','post',payload.payload);
        yield put({type: REGISTRO_EXITOSO, payload: rdo.data.token});
        const rdo2 = yield call(apiCall, 'apiNode','/api/auth','get',null,rdo.data.token);
        yield put({type: OBTENER_USUARIO, payload: rdo2.data.usuario});


    } catch (error) {
        console.log(error.response);
        if (error.response.data.errores) {
            yield put({type: REGISTRO_ERROR ,payload: error.response.data.errores[0].msg});
        } else {
        yield put({type: REGISTRO_ERROR ,payload: error.response.data.msg});
        }
    }
}

export function* IniciarSesion( payload ) {


    try {
        yield put({type: CARGANDO_LOGIN});
        const rdo = yield call(apiCall, 'apiNode','/api/auth','post',payload.payload);
        yield put({type: LOGIN_EXITOSO, payload: rdo.data.token});

        const resultado = yield call(apiCall, 'apiNode','/api/auth','get',null,rdo.data.token);
        yield put({type: OBTENER_USUARIO, payload: resultado.data.usuario});

    } catch (error) {
        console.log(error.response);
        if (error.response.data.errores) {
            yield put({type: LOGIN_ERROR , payload: error.response.data.errores[0].msg});
        } else {
        yield put({type: LOGIN_ERROR , payload: error.response.data.msg});
        }
    }
}

export function* autenticarUsuario() {

    const token = localStorage.getItem('token');

    try {
        yield put({type: CARGANDO_LOGIN});

        const resultado = yield call(apiCall, 'apiNode','/api/auth','get',null,token);
        yield put({type: OBTENER_USUARIO, payload: resultado.data.usuario});

    } catch (error) {
        console.log(error.response);
        if (error.response.data.errores) {
            yield put({type: LOGIN_ERROR , payload: null});
        } else {
        yield put({type: LOGIN_ERROR , payload: null});
        }
    }
}


//Watcher vigila cuando las acciones son disparadas, está incluido en operations.
export default function* WatchRegistroUsuario() {
    yield takeLatest(REGISTRANDO_USUARIO,RegistrarUsuario);
    yield takeLatest(LOGUEANDO_USUARIO,IniciarSesion);
    yield takeLatest(AUTENTICANDO_USUARIO,autenticarUsuario);
}


