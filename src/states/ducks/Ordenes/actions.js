import {
    AGREGAR_ORDEN      ,
    EDITAR_ORDEN       ,
    ELIMINAR_ORDEN     ,
    SET_LISTA_ORDENES  ,
    REINICIAR_LISTA_ORDENES
    
} from './types';

export const agregarOrdenAction = (payload) => ({

    type: AGREGAR_ORDEN,
    payload: payload

});

export const editarOrdenAction = (payload) => ({

    type: EDITAR_ORDEN,
    payload: payload

});

export const eliminarOrdenAction = (payload) => ({

    type: ELIMINAR_ORDEN,
    payload: payload

});

export const reiniciarOrdenesAction = () => ({

    type: REINICIAR_LISTA_ORDENES,
    payload: null

});

export const setOrdenes = (payload) => ({

    type: SET_LISTA_ORDENES,
    payload: payload

});

