import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('col')}>
                    <div className={cx('col-inner')}>
                        <h4>LATISH</h4>
                        <p>
                            <span>
                                WEBDEMO.COM là blog cá nhân chia sẻ những kiến thức đồ họa và kinh nghiệm làm website
                                Wordpress cho tất cả mọi người. Mình rất yêu thích Nghệ thuật Thánh và Đồ họa Công giáo.
                                Rất mong được kết bạn với đông đảo anh em Designer gần xa.
                            </span>
                        </p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('col-inner')}>
                        <h4>Chính sách</h4>
                        <ul>
                            <li>
                                <a href="">
                                    <span>a</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>a</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>a</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>a</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>a</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>a</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>a</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('col-inner')}>
                        <h4>Thông tin liên hệ</h4>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>
                                        <strong>Địa chỉ: </strong>ĐH Bách Khoa TP.HCM
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <strong>Hotline: </strong>0123456789
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <strong>Email: </strong>email@gmail.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <Button href="#" hotline rightIcon={<FontAwesomeIcon icon={faPhone} />}>
                            Hotline tư vấn đặt hàng
                        </Button>
                    </div>
                </div>

                <div className={cx('col')}>
                    <div className={cx('col-inner')}>
                        <h4>Fanpage Facebook</h4>
                        <p>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
