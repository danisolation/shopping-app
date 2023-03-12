import classNames from 'classnames/bind';

import styles from './ShoppingWrapper.module.scss';

const cx = classNames.bind(styles);

function ShoppingWrapper({ children, className }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('col', className)}>{children}</div>
            </div>
        </div>
    );
}

export default ShoppingWrapper;
