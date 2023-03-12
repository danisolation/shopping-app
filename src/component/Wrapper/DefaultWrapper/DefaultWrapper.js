import classNames from 'classnames/bind';
import styles from './DefaultWrapper.module.scss';

const cx = classNames.bind(styles);

function DefaultWrapper({ children, className }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('col', className)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultWrapper;
