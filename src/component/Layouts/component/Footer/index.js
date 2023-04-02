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
                                Chào mừng bạn đến với Latish - trang thương mại điện tử hàng đầu trong lĩnh vực mua bán
                                đồ second-hand. Tại Latish, chúng tôi cam kết cung cấp cho bạn một trải nghiệm mua sắm
                                trực tuyến tuyệt vời, với các sản phẩm chất lượng và giá cả hợp lý.
                            </span>
                        </p>
                    </div>
                </div>
                <div className={cx('col')}></div>
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
