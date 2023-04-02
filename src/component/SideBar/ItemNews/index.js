import classNames from 'classnames/bind';
import styles from './ItemNews.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemNews({
    to,
    data,
    primary = false,
    mini = false,
    disabled = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        mini,
        disabled,
    });
    return (
        <div className={classes} {...passProps}>
            <div className={cx('container')}>
                <div className={cx('box-img')}>
                    <Link to={to}>
                        <img src={data.img} alt={data.des} />
                    </Link>
                </div>
                <div className={cx('box-text')}>
                    <div className={cx('title')}>
                        <p>
                            <Link to={to}>{data.des}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemNews;
