import {createAction, handleActions} from 'redux-actions';
import * as api from 'api';

const GET_CAR_PENDING = 'car/GET_CAR_PENDING';
const GET_CAR_FULFILLED = 'car/GET_CAR_FULFILLED';
const GET_CAR_REJECTED = 'car/GET_CAR_REJECTED';

const pending = createAction(GET_CAR_PENDING);
const fulfilled = createAction(GET_CAR_FULFILLED, data => data);
const rejected = createAction(GET_CAR_REJECTED);

export const getCar = type => async dispatch => {
    dispatch(pending());

    try{
        const response = await api.getCar(type);
        dispatch(fulfilled(response));
    }catch(e){
        dispatch(rejected());
    }
};

const initialState = {
    pending: false,
    rejected: false,
    cars: []
};

export default handleActions({
    [GET_CAR_PENDING]: state => ({
        ...state,
        pending: true,
        rejected: false
    }),

    [GET_CAR_FULFILLED]: (state, {payload: {data}}) => ({
        ...state,
        pending: false,
        cars: data.data.list
    }),

    [GET_CAR_REJECTED]: state => ({
        ...state,
        pending: false,
        rejected: true
    })
}, initialState);