import React from 'react';
import App from 'shared/hottip/App';
import {Provider} from 'react-redux';
import configureStore from 'store/hottip/configureStore';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;