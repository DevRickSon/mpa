import {createStore, applyMiddleware} from 'redux';
import modules from './';
import thunk from 'redux-thunk';

const configureStore = () => {
    return createStore(modules, applyMiddleware(thunk));
}

export default configureStore;