import classNames from 'classnames/bind';
import styles from './Camera.module.scss';
import { ShoppingWrapper } from '~/component/Wrapper/ShoppingWrapper';
import { ItemsWrapper } from '~/component/Wrapper/ItemsWrapper';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '~/component/Button';
import { Link } from 'react-router-dom';

const ITEMS = [
    {
        img: images.image2,
        des: 'Camera ngụy trang đồng hồ treo tường iFocus ST27',
        price: '810.000',
        to: '/#',
    },
    {
        img: images.image3,
        des: 'Camera Ngụy Trang Module Siêu Nhỏ iFocus BV20',
        price: '1.500.000',
        to: '/#',
    },
    {
        img: images.image4,
        des: 'Máy hút mụn cám chuyên dụng Derma 110',
        price: '180.000',
        to: '/#',
    },
];

const cx = classNames.bind(styles);

function Camera() {
    const [quantity, setQuantity] = useState(1);
    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity >= 2) setQuantity(quantity - 1);
    };
    return (
        <ShoppingWrapper>
            <ItemsWrapper>
                <div className={cx('wrapper')}>
                    <div className={cx('left')}>
                        <div className={cx('col')}>
                            <img src={images.image1} alt="Camera" />
                        </div>
                        <div className={cx('col')}>
                            <h1>Camera Ngụy Trang Bật Lửa IFocus BL02</h1>
                            <p className={cx('price')}>
                                1.560.000 <FontAwesomeIcon icon={faDongSign} />
                            </p>
                            <div className={cx('short-des')}>
                                <p>
                                    Camera ngụy trang bật lửa plasma được bán độc quyền trên Hàng Tốt Nhập Khẩu. Dòng
                                    sản phẩm quay ngụy trang cao cấp với thiết kế bằng chất liệu kim loại sang trọng.
                                    Cẩm trên tay bạn sẽ thực hiện thao tác quay dễ dàng, nhanh chóng với chất lượng
                                    video siêu nét.
                                </p>
                            </div>
                            <div className={cx('quantity')}>
                                <input type="button" value="-" onClick={handleMinus} />
                                <input min="1" name="quantity" value={quantity} size="4" placeholder="" />
                                <input type="button" value="+" onClick={handleAdd} />
                            </div>
                            <div className={cx('order')}>
                                <Button order style={{ background: '#fb7716' }}>
                                    Đặt hàng nhanh
                                </Button>
                                <Button order style={{ background: '#4CAF50' }}>
                                    Thêm vào giỏ
                                </Button>
                            </div>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('detail')}>
                                <p className={cx('sub-header')}>Thông tin chi tiết</p>
                                <div className={cx('accordion-inner')}>
                                    <p>
                                        <strong>Tính năng của Camera ngụy trang bât lửa IFocus BL02:</strong>
                                    </p>
                                    <ul>
                                        <li>
                                            Camera ngụy trang bật lửa Plasma được thiết kế dưới dạng bật lửa với kích
                                            thước siêu nhỏ và tinh xảo giúp cho bạn dễ dàng mang theo bên người và sử
                                            dụng quay phim bất cứ lúc nào.
                                        </li>
                                        <li>
                                            Với độ phân giải video FullHD 1080P cho video sắc nét, chân thực và sống
                                            động.
                                        </li>
                                        <li>
                                            Có góc quay rộng 180 độ, bạn có thể điều chỉnh góc quay bằng tay theo ý muốn
                                            1 cách dễ dàng.
                                        </li>
                                        <li>
                                            Là một phụ kiện cần thiết trong công tác an ninh, điều tra, báo chí, thám
                                            tử… giúp bạn bảo vệ người thân, bạn bè, thu thập thông tin,…
                                        </li>
                                    </ul>
                                    <h3>Thông số kỹ thuật:</h3>
                                    <ul>
                                        <li>Thời gian sạc: 2 giờ</li>
                                        <li>Thời gian làm việc: khoảng 120 phút</li>
                                        <li>Chế độ quay video full HD</li>
                                        <li>Điện áp sạc: DC-5V</li>
                                        <li>Loại giao diện: MINI 5pin USB</li>
                                        <li>Loại bộ nhớ: Hỗ trợ tối đa 32G Micro SD</li>
                                        <li>Hệ thống hỗ trợ: Windows 2000 XP2003/Vista</li>
                                        <li>Loại Pin: pin lithium polymer</li>
                                        <li>Ghi âm thanh 1 chiều</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('free-ship')}>
                            <span
                                className={cx('title')}
                                style={{ background: `url(${images.checked}) 0 4px no-repeat` }}
                            >
                                Giao hàng hỏa tốc, chỉ từ 2h – 24h
                            </span>
                            <span
                                className={cx('title')}
                                style={{ background: `url(${images.checked}) 0 4px no-repeat` }}
                            >
                                Giảm 30% tất cả các đơn hàng trên toàn hệ thống
                            </span>
                            <span
                                className={cx('title')}
                                style={{ background: `url(${images.checked}) 0 4px no-repeat` }}
                            >
                                Cam kết bán hàng chính hãng – Đổi trả trong vòng 1 tuần
                            </span>
                        </div>
                        <div className={cx('product')}>
                            <span>Sản phẩm mới</span>
                            <ul className={cx('list')}>
                                {ITEMS.map((item, index) => (
                                    <li key={index} className={cx('item')}>
                                        <Link to={item.to}>
                                            <img src={item.img} alt={item.des} />
                                            <span>{item.des}</span>
                                        </Link>
                                        <div className={cx('sub-price')}>
                                            <span>
                                                {item.price} <FontAwesomeIcon icon={faDongSign} />
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ItemsWrapper>
        </ShoppingWrapper>
    );
}

export default Camera;
