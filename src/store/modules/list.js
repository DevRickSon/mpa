import {createAction, handleActions} from 'redux-actions';
import * as api from 'api';

const GET_LIST_PENDING = 'lists/GET_LIST_PENDING';
const GET_LIST_FULFILLED = 'lists/GET_LIST_FULFILLED';
const GET_LIST_REJECTED = 'lists/GET_LIST_REJECTED';

const pending = createAction(GET_LIST_PENDING);
const fulfilled = createAction(GET_LIST_FULFILLED, data => data);
const rejected = createAction(GET_LIST_REJECTED, error => error);

export const getList = page => async dispatch => {
    dispatch(pending());

    try{
        if(page === 4) throw new Error();

        const response = await api.getList(page);
        dispatch(fulfilled(response));
    }catch(e){
        dispatch(rejected(e));
    }
}

const initialState = {
    pending: false,
    rejected: false,
    lists: []
};

export default handleActions({
    [GET_LIST_PENDING]: state => ({
        ...state,
        pending: true,
        rejected: false
    }),
    [GET_LIST_FULFILLED]: (state, {payload: {data}}) => ({
        ...state,
        pending:false,
        lists: state.lists.concat(data.data)
    }),
    [GET_LIST_REJECTED]: state => ({
        ...state,
        pending: false,
        rejected: true
    })
}, initialState);