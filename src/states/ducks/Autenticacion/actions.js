import {
    LOGUEANDO_USUARIO,
    REGISTRANDO_USUARIO,
    CERRAR_SESION,
    AUTENTICANDO_USUARIO
} from './types';


export const registrarUsuario = (datos) => ({

    type: REGISTRANDO_USUARIO,
    payload: datos

});

export const iniciarSesion = (datos) => ({

    type: LOGUEANDO_USUARIO,
    payload: datos

});

export const cerrarSesion = () => ({

    type: CERRAR_SESION

});

export const autenticarUsuario = () => ({

    type: AUTENTICANDO_USUARIO

});