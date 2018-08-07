import React, {Component} from 'react';
import Car from 'components/Car';
import classNames from 'classnames';
import styles from './Cars.scss';

const cx = classNames.bind(styles);

class Cars extends Component{
    static defaultProps = {
        loading: false,
        error: false,
        cars: []
    };

    render(){
        const {cars} = this.props;
        const carItems = cars.map(car => (<Car key={car.id} image_path={car.image_path} kname={car.kname} brand={car.brand.kname} min_price={car.min_price} />));

        return (
            <div className={cx('brand_view', 'detail')}>
                <ul className={cx('term_list')}>
                    {carItems}
                </ul>
            </div>
        );
    }
}

export default Cars;