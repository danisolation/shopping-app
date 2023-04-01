import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Button to={'/'}>Trang Chủ</Button>
                <Button to={'/introduction'}>Giới thiệu</Button>

                <Tippy
                    interactive
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className={cx('list')} tabIndex="-1" {...attrs}>
                            <Button key="1" sub>
                                Trang Chủ
                            </Button>
                            <Button key="2" sub>
                                Trang Chủ
                            </Button>
                            <Button key="3" sub>
                                Trang Chủ
                            </Button>
                            <Button key="4" sub>
                                Trang Chủ
                            </Button>
                            <Button key="5" sub>
                                Trang Chủ
                            </Button>
                            <Button key="6" sub>
                                Trang Chủ
                            </Button>
                            <Button key="7" sub>
                                Trang Chủ
                            </Button>
                        </div>
                    )}
                >
                    {}
                    <div>
                        <Button to={'/shop'} rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                            Cửa hàng
                        </Button>
                    </div>
                </Tippy>

                <Button to={'/news'}>Tin tức</Button>
                <Button to={'/contact'}>Liên Hệ</Button>
                <ul className={cx('auth')}>
                    <li>
                        <Button auth to={'/'}>
                            Đăng nhập / Đăng ký{' '}
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
