import React, {useEffect,useCallback} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { autenticarUsuario } from '../states/ducks/Autenticacion/actions';

const RutaPrivada = ( {component:Component , ...props }) => {

    
    const dispatch = useDispatch();


    const initFetch = useCallback(() => {
      dispatch(autenticarUsuario());
  
    }, [dispatch]);
  
  
    useEffect(() => {
      initFetch();
    }, [initFetch]);

    const { cargando } = useSelector(state => state.auth);
    const { autenticado } = useSelector(state => state.auth);
    const productosSeleccionados = useSelector(state => state.carrito.productosSeleccionados);



    return (
        <Route {...props} render={ props => !autenticado && !cargando ?(
            <Redirect to="/login" />
        ):(
          productosSeleccionados.length === 0 ?(
            <Redirect to="/" />
          ):(
            <Component {...props} />
          )
        )}
        
        
        />
    );
};

export default RutaPrivada;

