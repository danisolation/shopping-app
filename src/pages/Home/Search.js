import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <form role="search" method="get" className={cx('searchform')}>
                <div className={cx('left')}>
                    <select className={cx('categories')}>
                        <option value selected="selected">
                            All
                        </option>
                        <option value="me-va-be">Mẹ và bé</option>
                        <option value="dung-cu-gia-dinh">Dụng cụ gia đình</option>
                    </select>
                </div>
                <div className={cx('mid')}>
                    <input type="search" placeholder="Tìm kiếm sản phẩm..." className={cx('search-input')} name="s" />
                </div>
                <div className={cx('right')}>
                    <button type="submit" value="Tìm kiếm" className={cx('button')} aria-label="Submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search;
