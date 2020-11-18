import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import appReducer from '../reducers/appReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// if you're also using redux-thunk, add it as a middleware
let createStoreWithMiddleware = {};
if (process.env.NODE_ENV.trim() === 'production'){
    createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
        createStore,
    );

}else {
    createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(
        createStore,
    );

}

const rootReducer = combineReducers({
  app: appReducer
});

function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState, composeEnhancers());
}

const store = module.hot
  ? configureStore(window.__REDUX_STATE__ || {})
  : configureStore({});

export { configureStore, store };

