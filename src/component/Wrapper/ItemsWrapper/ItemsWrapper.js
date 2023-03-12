import classNames from 'classnames/bind';

import styles from './ItemsWrapper.module.scss';

const cx = classNames.bind(styles);

function ItemsWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default ItemsWrapper;
