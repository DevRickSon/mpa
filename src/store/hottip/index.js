import {combineReducers} from 'redux';
import list from 'store/modules/list';
import counter from 'store/modules/counter';

export default combineReducers({
    list,
    counter
});