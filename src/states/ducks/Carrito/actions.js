import {
    AGREGAR_PRODUCTO_CARRITO ,  
    EDITAR_PRODUCTO_CARRITO ,   
    ELIMINAR_PRODUCTO_CARRITO,
    REINICIAR_CARRITO,
    SET_PAGO_CARRITO,
    SET_DIRECCIONPEDIDO_CARRITO,
    ELIMINAR_DIRECCIONPEDIDO_CARRITO
    
} from './types';

export const agregarProductoCarritoAction = (payload) => ({

    type: AGREGAR_PRODUCTO_CARRITO,
    payload: payload

});

export const editarProductoCarritoAction = (payload) => ({

    type: EDITAR_PRODUCTO_CARRITO,
    payload: payload

});

export const eliminarProductoCarritoAction = (payload) => ({

    type: ELIMINAR_PRODUCTO_CARRITO,
    payload: payload

});

export const reiniciarCarritoAction = () => ({

    type: REINICIAR_CARRITO,
    payload: null

});

export const setPagoCarrito = (payload) => ({

    type: SET_PAGO_CARRITO,
    payload: payload

});

export const setDireccionPedidoCarrito = (payload) => ({

    type: SET_DIRECCIONPEDIDO_CARRITO,
    payload: payload

});

export const eliminarDireccionPedidoCarrito = () => ({

    type: ELIMINAR_DIRECCIONPEDIDO_CARRITO,
    payload: null

});
