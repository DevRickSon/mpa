import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';

export const increase = createAction(INCREASE);

const initialState = {
    number: 1
};

export default handleActions({
    [INCREASE]: ({number}) => ({number: number + 1})
}, initialState);