import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  middlewares.push(logger);
}

const store = createStore(reducers(), compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
