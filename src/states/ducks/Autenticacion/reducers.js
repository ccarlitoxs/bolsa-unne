  import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR  ,
    OBTENER_USUARIO ,
    LOGIN_ERROR     ,
    LOGIN_EXITOSO   ,
    CERRAR_SESION ,
    CARGANDO_LOGIN
} from './types';

const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
    notificaciones: [],
    direcciones:[{
        "dom_id": 8405,
        "domicilio": "B. STA. INES PC.12 CASA 84 M:135",
        "ciudad": "RESISTENCIA",
        "provincia":"CHACO",
        "cod_postal": 3500,
        "latitud": null,
        "longitud": null,
      }]
}

export default function authReducer(state = initialState, action ) {
    switch (action.type) {
        case CARGANDO_LOGIN:
            return {
                ...state,
                mensaje: null,
            }
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token',action.payload);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload, 
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload, 
                cargando: false
            }
        default:
            return state;
    }
}