import React, {Component} from 'react';
import List from 'components/List';
import classNames from 'classnames';
import styles from './Lists.scss';

const cx = classNames.bind(styles);

class Lists extends Component{
    static defaultProps = {
        loading: false,
        error: false,
        lists: [],
        onClick: () => console.warn('onClick is not defined')
    };

    render(){
        const {lists, error, onClick} = this.props;
        const listItems = lists.map(
            ({post_img_src, post_title, post_created, post_id}) => (<List img_src={post_img_src} title={post_title} date={post_created} key={post_id} />)
        );

        return (
            <div>
                <ul className={cx('lists')}>
                    {listItems}
                </ul>
                {!error && (<button className={cx('btn_more')} onClick={onClick}>더보기</button>)}
            </div>
        );
    }
}

export default Lists;