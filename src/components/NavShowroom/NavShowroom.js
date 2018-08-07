import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import styles from './NavShowroom.scss';

const cx = classNames.bind(styles);

const NavShowroom = () => {
    return (
        <ul className={cx('list_menu', 'menu_showroom')}>
            <li><NavLink exact to="/showroom" className={cx('link_menu')} activeClassName={cx('active')}>hachbag</NavLink></li>
            <li><NavLink to="/showroom/sedan" className={cx('link_menu')} activeClassName={cx('active')}>sedan</NavLink></li>
            <li><NavLink to="/showroom/suv" className={cx('link_menu')} activeClassName={cx('active')}>suv</NavLink></li>
        </ul>
    );
}

export default NavShowroom;