import classNames from 'classnames/bind';
import styles from './TextWrapper.module.scss';

const cx = classNames.bind(styles);

function TextWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default TextWrapper;
