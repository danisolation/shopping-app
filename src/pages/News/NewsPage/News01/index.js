import { DefaultWrapper } from '~/component/Wrapper/DefaultWrapper';
import classNames from 'classnames/bind';
import styles from './News01.module.scss';
import { TextWrapper } from '~/component/Wrapper/TextWrapper';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function News01() {
    return (
        <DefaultWrapper>
            <TextWrapper className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h6>
                        <Link to={'/news'}>TIN TỨC</Link>
                    </h6>
                    <h1>3 Mẫu camera ngụy trang siêu nhỏ đặc biệt</h1>
                    <div className={cx('post')}>
                        Posted on <span>08/10/2019</span> by <span>admin</span>
                    </div>
                </div>
                <div className={cx('content')}>
                    <p>
                        Trong một thế giới đầy những phát minh khoa học đã giúp thay đổi cuộc sống của con người, bạn sẽ
                        không khó để tìm ra những thiết bị vô cùng hữu ích như điện thoại di động, tivi, tủ lạnh, điều
                        hòa nhưng bạn sẽ không dễ dàng gì để có thể nhìn thấy những thứ đang ở ngay trước mắt bạn, trong
                        lòng bàn tay bạn nhưng bạn lại không biết công năng thực sự của những thiết bị đó. Điển hình là
                        camera ngụy trang. Thông thường khi phát hiện ống kính máy quay, chúng ta thường có cảm giác né
                        tránh nếu như không biết rõ mục đích quay là gì. Rất nhiều phóng viên báo chí, truyền hình khi
                        tác nghiệp với những chuyên đề nóng bỏng được xã hội quan tâm đều không thể đường đường chính
                        chính sử dụng máy quay truyền thống do sẽ vấp phải sự kháng cự, phản đối từ những người được
                        quay. Trong một số trường hợp, nếu để lộ ra việc đang ghi hình thì người quay còn gặp nguy hiểm
                        đến sức khỏe, tính mạng.
                    </p>
                    <p>
                        Thực tế này đỏi hỏi các nhà sản xuất phải không ngừng sáng tạo để cho ra mắt những mẫu camera
                        ngụy trang mang hai yếu tố quan trọng là: <strong>SIÊU NHỎ</strong> và <strong>ĐẶC BIỆT</strong>
                        . Thiết kế nhỏ bé, mini sẽ giúp chúng có thể được ngụy trang vào những vật dụng quen thuộc trong
                        cuộc sống hàng ngày một cách dễ dàng hơn. Còn thiết kế đặc biệt lại khiến cho người bị quay sẽ
                        không thể biết được mình đang được ghi hình. Giúp cho người quay có thể yên tâm tác nghiệp, tập
                        trung vào những công việc quan trọng hơn. Tránh gặp rắc rối và khó xử trong một số trường hợp
                        đặc biệt. Camera ngụy trang siêu nhỏ đặc biệt là sự hội tụ đầy đủ tất cả những gì bạn cần. Với
                        hàng chục mẫu mã trên thị trường hiện nay thật khó để cho bạn có thể lựa chọn được một mẫu
                        camera ngụy trang siêu nhỏ đặc biệt thật sự ưng ý. Với kinh nghiệm trong lĩnh vực camera quay
                        lén, ngụy trang siêu nhỏ, Hàng Tốt Nhập Khẩu trân trọng giới thiệu tới bạn đọc:
                    </p>
                </div>
            </TextWrapper>
        </DefaultWrapper>
    );
}

export default News01;
