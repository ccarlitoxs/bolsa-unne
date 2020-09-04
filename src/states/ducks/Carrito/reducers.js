import {
    AGREGAR_PRODUCTO_CARRITO ,  
    EDITAR_PRODUCTO_CARRITO ,   
    ELIMINAR_PRODUCTO_CARRITO ,
    REINICIAR_CARRITO,
    SET_PAGO_CARRITO,
    AGREGAR_DESCUENTO_CARRITO,
    ELIMINAR_DESCUENTO_CARRITO,
    SET_DIRECCIONPEDIDO_CARRITO,
    ELIMINAR_DIRECCIONPEDIDO_CARRITO
    
} from './types';

const initialState = {
    productosSeleccionados:[],
    error: null,
    loading: false,
    pago: null,
    descuentos: [{
        'id': 1,
        'descripcion': 'Descuento por pagina nueva',
        'porcentaje': 0.10,
        'codigo':'FELIZNAVIDAD2019'
    },
    {
        'id': 2,
        'descripcion': 'Descuento por codigo',
        'porcentaje': 0.05,
        'codigo':'CODIGOFACILITO'
    }],
    direccionPedido:null
}

export default function carritoReducer(state = initialState, action ) {
    switch (action.type) {
        case AGREGAR_PRODUCTO_CARRITO:
            return {
                ...state,
                productosSeleccionados : [...state.productosSeleccionados, action.payload]
            }

        case EDITAR_PRODUCTO_CARRITO:

           return {
               ...state,
               productosSeleccionados : state.productosSeleccionados.map(producto => producto.id === action.payload.id 
                ? action.payload
                : producto
                )
           }   

        case ELIMINAR_PRODUCTO_CARRITO:
           return {
               ...state,
               productosSeleccionados : state.productosSeleccionados.filter(producto => producto.id !== action.payload.id )
           } 

        case REINICIAR_CARRITO:
            return {
                ...state,
                productosSeleccionados :[]
            }
        case SET_PAGO_CARRITO:
            return {
                ...state,
                pago : action.payload
            }

        case AGREGAR_DESCUENTO_CARRITO:
            return {
                ...state,
                descuento : action.payload
            }
        case ELIMINAR_DESCUENTO_CARRITO:
            return {
                ...state,
                descuentos : state.descuentos.filter(descuento => descuento.id !== action.payload.id )
            }

        case SET_DIRECCIONPEDIDO_CARRITO:
            return {
                ...state,
                direccionPedido : action.payload
            }  

        case ELIMINAR_DIRECCIONPEDIDO_CARRITO:
           return {
               ...state,
               direccionPedido : null
           }

        default:
            return state;
    }
}