import {
    // OBTENER_AMBIENTES  ,      
    // OBTENER_AMBIENTES_EXITO  ,
    // OBTENER_AMBIENTES_LOADING,
    // OBTENER_AMBIENTES_ERROR  ,
    // OBTENER_PRODUCTOS    ,    
    OBTENER_PRODUCTOS_EXITO  ,
    OBTENER_PRODUCTOS_LOADING,
    OBTENER_PRODUCTOS_ERROR  
} from './types';

const initialState = {
    ambientes: null,
    productos: [],
    error: false,
    loading: false,
    //urlImage: 'http://181.105.127.194:8080/imagenes/articulos/'
    urlImage: 'http://192.168.1.150:8080/imagenes/articulos/'
}

export default function commerceReducer(state = initialState, action ) {
    switch (action.type) {
        case OBTENER_PRODUCTOS_EXITO:
            return {
                ...state,
                productos: action.payload,
                loading: false,
                error: false
            }
        case OBTENER_PRODUCTOS_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        case OBTENER_PRODUCTOS_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
    
        default:
            return state;
    }
}