import React from 'react';
import App from 'shared/showroom/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'store/showroom/configureStore';

const store = configureStore();

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

export default Root;