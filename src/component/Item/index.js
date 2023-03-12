import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Item({
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
    // const props = {
    //     onClick,
    //     to,
    //     data,
    //     ...passProps,
    // };
    // if (disabled) {
    //     Object.keys(props).forEach((key) => {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    // }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        mini,
        disabled,
    });
    return (
        <div className={classes}>
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
                    <div className={cx('price')}>
                        <span>
                            {data.price}
                            <FontAwesomeIcon icon={faDongSign} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
