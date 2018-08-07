import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './Nav.scss';

const cx = classNames.bind(styles);

class Nav extends Component{
    static defaultProps = {
        current: ''
    };

    render(){
        const {current} = this.props;

        return (
            <ul className={cx('list_menu')}>
                <li><a href="/" className={current=== 'home' ? cx('link_menu', 'active') : cx('link_menu')}>home</a></li>
                <li><a href="/hottip" className={current=== 'hottip' ? cx('link_menu', 'active') : cx('link_menu')}>hot tip</a></li>
                <li><a href="/showroom" className={current=== 'showroom' ? cx('link_menu', 'active') : cx('link_menu')}>showroom</a></li>
            </ul>
        );
    }
}

export default Nav;