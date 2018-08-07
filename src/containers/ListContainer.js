import React, {Component} from 'react';
import Lists from 'components/Lists';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listActions from 'store/modules/list';
import * as counterActions from 'store/modules/counter';

class ListContainer extends Component{
    componentDidMount(){
        const {ListActions, page} = this.props;
        ListActions.getList(page);
    }

    handleMore = () => {
        const {CounterActions} = this.props;
        CounterActions.increase();
    }

    componentWillReceiveProps(nextProps, nextState){
        const {ListActions} = this.props;

        if(nextProps.page !== this.props.page){
            ListActions.getList(nextProps.page);
        }
    }

    render(){
        const {loading, error, lists} = this.props;
        const {handleMore} = this;

        return (
            <Lists loading={loading} error={error} lists={lists} onClick={handleMore} />
        );
    }
}

export default connect(
    ({list, counter}) => ({
        loading: list.pending,
        error: list.rejected,
        lists: list.lists,
        page: counter.number
    }),
    dispatch => ({
        ListActions: bindActionCreators(listActions, dispatch),
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(ListContainer);