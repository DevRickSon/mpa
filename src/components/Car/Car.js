import React, {Component} from 'react';
import styles from './Car.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Car extends Component{
    static defaultProps = {
        image_path: '',
        brand: '',
        kname: '',
        min_price: ''
    };

    render(){
        const {image_path, brand, kname, min_price} = this.props;

        return (
            <li className={cx('car_item')}>
                <a href="#none">
                    <span className={(cx('icon_brd'))}>
                        <img src={image_path} alt="#" />
                        <em className={cx('list_br')}>
                            <span>{brand} {kname}</span>
                        </em>
                        <em className={cx('list_pri')}>{min_price}부터</em>
                    </span>
                </a>
            </li>
        );
    }
}

export default Car;
