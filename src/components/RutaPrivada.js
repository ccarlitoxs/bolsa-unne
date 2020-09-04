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



    return (
        <Route {...props} render={ props => !autenticado && !cargando ?(
            <Redirect to="/login" />
        ):(
            <Component {...props} />
        )}
        
        
        />
    );
};

export default RutaPrivada;

