import React, {Component} from 'react';
import Cars from 'components/Cars';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from 'store/modules/car';

class CarContainer extends Component{
    static defaultProps = {
        type: ''
    }

    componentDidMount(){
        const {CarActions, type} = this.props;
        CarActions.getCar(type);
    }

    render(){
        const {loading, error, cars} = this.props;

        return (
            <Cars loading={loading} error={error} cars={cars} />
        );
    }
}

export default connect(
    ({car}) => ({
        loading: car.pending,
        error: car.rejected,
        cars: car.cars
    }),
    dispatch => ({
        CarActions: bindActionCreators(carActions, dispatch)
    })
)(CarContainer);