import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './List.scss';

const cx = classNames.bind(styles);

class List extends Component{
    static defaultProps = {
        img_src: '',
        title: '',
        date: ''
    }

    render(){
        const {img_src, title, date} = this.props;

        return (
            <li className={cx('item')}>
                <a className={cx('link_item')}>
                    <span className={cx('img_item')}><img src={`${img_src}?resize=300:*`} className={cx('img')} alt="#" /></span>
                    <strong className={cx('tit_item')}>{title}</strong>
                    <span className={cx('date_item')}>{date}</span>
                </a>
            </li>
        );
    }
}

export default List;