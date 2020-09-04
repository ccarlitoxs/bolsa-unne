import { put,call,takeLatest} from 'redux-saga/effects';

import apiCall from '../api';


// En el componente se importa useDispatch para llamar a una action.
// y se utiliza useSelector para traer el state dentro del reducer o duck.

// STATE
const dataInicial = {
    token: null,
    instaFeed: null,
    loading: false,
    error: null
}

// REDUCER el archivo reducer importan los types,
export default function instaReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_INSTAFEED_LOADING:
            return {
                ...state, 
                loading: true
                }

        case OBTENER_INSTAFEED_EXITO:
            return {
                ...state, 
                instaFeed: action.payload,
                loading: false,
                error:null
                }

        case OBTENER_INSTAFEED_ERROR:
            return {
                ...state,
                token: null, 
                instaFeed: null,
                loading: false,
                error: action.payload
                }
        default:
            return state;
    }
}

// TYPES
const OBTENER_INSTAFEED = 'OBTENER_INSTAFEED';
const OBTENER_INSTAFEED_EXITO = 'OBTENER_INSTAFEED_EXITO';
const OBTENER_INSTAFEED_LOADING = 'OBTENER_INSTAFEED_LOADING';
const OBTENER_INSTAFEED_ERROR = 'OBTENER_INSTAFEED_ERROR';



// ACTIONS (Se utilizan en la vista o en el reducer)
// el archivo action importan los types, 
// las actions se exportan sin default
// se importan en el componente
// utilizando llaves y en from se llama al archivo actions.
export const obtenerInstaFeedAction = (payload) => ({

             type: OBTENER_INSTAFEED,
             payload: payload

});


//OPERATIONS, utilizando una saga, aca van cada saga y se combinan en el function FeedInsta

export function* ObtenerFeedInsta( payload ) {
    yield put({type: OBTENER_INSTAFEED_LOADING});
    try {
        
        const token = 'IGQVJYaHktdnIxRXFNNUN0SDFacm1SWDNEQUVUR1Q2M3lhaDZAtUFFLT3ZAXdUZAJQkY1NlRuVi1wUTdtSXByZAHRWSmhjMlF2d0JRQW5fRlVLTmU1TnZAOTk9fRHA1Qk1pRkQwYlU5S1c2OTM0XzJSWVlWODNvMU9PNUdMMThr';

        const resultado = yield call(apiCall,null,'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token='+token,'get',null,null);
        const resultadoFiltrado = resultado.data.data.filter(imagen => imagen.media_type ==='IMAGE');
        yield put({type: OBTENER_INSTAFEED_EXITO ,payload: resultadoFiltrado});
    } catch (error) {
        // console.log(error.response.data);
        yield put({type: OBTENER_INSTAFEED_ERROR ,payload: true});
    }
}


//Watcher vigila cuando las acciones son disparadas, está incluido en operations.
export function* WatchFeedInsta() {
    yield takeLatest(OBTENER_INSTAFEED,ObtenerFeedInsta);
}



