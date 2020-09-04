import { createStore, applyMiddleware ,compose } from 'redux';
import reduxSaga from 'redux-saga';

import reducer from './ducks';

import { rootSaga } from './ducks';

const sagaMiddleware = reduxSaga();
const store = createStore(
    reducer,
    
    compose(
        applyMiddleware(sagaMiddleware),
        
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

sagaMiddleware.run(rootSaga);

export default store;