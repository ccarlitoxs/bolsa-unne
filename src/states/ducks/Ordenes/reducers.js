import {
    AGREGAR_ORDEN      ,
    EDITAR_ORDEN       ,
    ELIMINAR_ORDEN     ,
    SET_LISTA_ORDENES  ,
    REINICIAR_LISTA_ORDENES
    
} from './types';

const initialState = {
    listaOrdenes:[],
    error: null,
    loading: false,
}

export default function ordenesReducer(state = initialState, action ) {
    switch (action.type) {
        case AGREGAR_ORDEN:
            return {
                ...state,
                listaOrdenes : [...state.listaOrdenes, action.payload]
            }

        case EDITAR_ORDEN:

           return {
               ...state,
               listaOrdenes : state.listaOrdenes.map(orden => orden.id === action.payload.id 
                ? action.payload
                : orden
                )
           }   

        case ELIMINAR_ORDEN:
           return {
               ...state,
               listaOrdenes : state.listaOrdenes.filter(orden => orden.id !== action.payload.id )
           } 

        case REINICIAR_LISTA_ORDENES:
            return {
                ...state,
                listaOrdenes :[]
            }
        case SET_LISTA_ORDENES:
            return {
                ...state,
                listaOrdenes : action.payload
            }

        default:
            return state;
    }
}