import classNames from 'classnames/bind';
import styles from './ItemNewsWrapper.module.scss';

const cx = classNames.bind(styles);

function ItemNewsWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default ItemNewsWrapper;
