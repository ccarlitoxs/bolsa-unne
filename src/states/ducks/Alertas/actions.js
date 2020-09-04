import {
    MOSTRAR_ALERTA ,  
    OCULTAR_ALERTA
} from './types';


export const mostrarAlerta = (msg,categoria) => ({

    type: MOSTRAR_ALERTA,
    payload: {
        msg,
        categoria
    }

});

export const ocultarAlerta = () => ({

    type: OCULTAR_ALERTA

});