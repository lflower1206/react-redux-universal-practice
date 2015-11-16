import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger()
)(createStore)

export default function configureStore(initialState) {

    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
          const nextRootReducer = require('../reducers')
          store.replaceReducer(nextRootReducer)
        });
    }

    return store;
}
