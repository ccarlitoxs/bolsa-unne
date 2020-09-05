// import { createSelector } from 'reselect';

// const getCarrito = (state) => state.carrito.productosSeleccionados
// const getDescuentos = (state) => state.carrito.descuentos

// export const getSubTotalcompra = createSelector(
//   [ getCarrito ],
//   (productosSeleccionados) => {

//     if (productosSeleccionados.length !== 0) {

//         let subTotalcompra = 0;
//         productosSeleccionados.map(producto => subTotalcompra += producto.precio*producto.cantidad)
//         return subTotalcompra;
//     }
//     return null;
    
//   }
// )

// export const getTotalcompra = createSelector(
//     [ getCarrito,getDescuentos,getSubTotalcompra ],
//     (productosSeleccionados,descuentos,subTotalcompra) => {
        
//       if (productosSeleccionados.length !== 0 && descuentos.length !== 0) {

//         let totalcompra = subTotalcompra;
//         descuentos.map(descuento => totalcompra = totalcompra - (totalcompra * descuento.porcentaje));

//         return totalcompra;
//       }
//       return null;
      
//     }
//   )

//   export const getResumen = createSelector(
//     [ getCarrito,getDescuentos,getSubTotalcompra ],
//     (productosSeleccionados,descuentos,subTotalcompra) => {
        
//       if (productosSeleccionados.length !== 0 && descuentos.length !== 0) {

//         let resumen = [];
//         resumen = [...resumen, {concepto : 'Subtotal',detalle: subTotalcompra}];
//         descuentos.map(descuento => resumen = [...resumen, {concepto : descuento.descripcion,detalle: (-1*subTotalcompra*descuento.porcentaje)}]);

//         return resumen;
//       }
//       return null;
      
//     }
//   )

// El selector se exporta y se lo importa desde un componente