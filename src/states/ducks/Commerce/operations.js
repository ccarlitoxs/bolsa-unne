import { put,call,takeLatest } from 'redux-saga/effects';
import apiCall from '../../api';

import {
    // OBTENER_AMBIENTES  ,      
    // OBTENER_AMBIENTES_EXITO  ,
    // OBTENER_AMBIENTES_LOADING,
    // OBTENER_AMBIENTES_ERROR  ,
    OBTENER_PRODUCTOS    ,    
    OBTENER_PRODUCTOS_EXITO  ,
    OBTENER_PRODUCTOS_LOADING,
    OBTENER_PRODUCTOS_ERROR  
} from './types';

export function* ObtenerProductos( payload ) {


    try {
        yield put({type: OBTENER_PRODUCTOS_LOADING});
        const rdo = yield call(apiCall, 'apiPaljet','articulos?descripcion=puerta&include=listas%2Cstock&size=12&solo_activos=true','get',null,null,null);

        yield put({type: OBTENER_PRODUCTOS_EXITO, payload: rdo.data.content});
            


    } catch (error) {
        console.log(error.response);
        yield put({type: OBTENER_PRODUCTOS_ERROR});
    }
}

//Watcher vigila cuando las acciones son disparadas, está incluido en operations.
export default function* WatchCommerce() {
    yield takeLatest(OBTENER_PRODUCTOS, ObtenerProductos);
    // yield takeLatest(LOGUEANDO_USUARIO,IniciarSesion);
    // yield takeLatest(AUTENTICANDO_USUARIO,autenticarUsuario);
}