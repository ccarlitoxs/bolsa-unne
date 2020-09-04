import {
    // OBTENER_AMBIENTES  ,      
    OBTENER_PRODUCTOS    ,    

} from './types';

export const obtenerProductos = (datos) => ({

    type: OBTENER_PRODUCTOS,
    payload: datos

});