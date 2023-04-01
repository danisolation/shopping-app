import { DefaultWrapper } from '~/component/Wrapper/DefaultWrapper';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { TextWrapper } from '~/component/Wrapper/TextWrapper';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <DefaultWrapper>
            <TextWrapper className={cx('intro')}>
                <h1>Liên hệ</h1>
                <p>Địa chỉ xem và mua sản phẩm trực tiếp: ĐH Bách Khoa TP.HCM</p>
                <blockquote>
                    <p>Vui lòng liên hệ số hotline: 0999000000 trước khi qua</p>
                </blockquote>
                <p>
                    Nếu bạn cần liên hệ hợp tác hoặc cần các thông tin hỗ trợ qua email, vui lòng gửi cho Latish theo
                    form bên dưới. Chúng tôi sẽ phản hồi trong khoảng thời gian 6h làm việc. Bạn cũng không cần thiết
                    phải gửi nhiều nội dung liên hệ giống nhau để nhận được câu trả lời nhanh hơn vì hệ thống sẽ tự động
                    chặn các liên hệ có yếu tố spam.
                </p>
                <div role="form" dir="ltr" lang="vi" className={cx('form')}>
                    <form>
                        <div className={cx('form-lien-he')}>
                            <h3>Liên hệ với chúng tôi</h3>
                            <p>Vui lòng liên hệ với chúng tôi để được tư vấn nhanh và chính xác nhất</p>
                            <p>
                                <span>
                                    <input
                                        type="text"
                                        value=""
                                        size="40"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Họ và tên..."
                                    ></input>
                                </span>

                                <span>
                                    <input
                                        type="text"
                                        value=""
                                        size="40"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Số điện thoại..."
                                    />
                                </span>
                                <span>
                                    <input
                                        type="text"
                                        value=""
                                        size="40"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Địa chỉ email..."
                                    ></input>
                                </span>
                                <span>
                                    <input
                                        type="text"
                                        value=""
                                        size="40"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Tiêu đề..."
                                    ></input>
                                </span>
                                <span>
                                    <textarea
                                        cols="40"
                                        rows="10"
                                        aria-invalid="false"
                                        placeholder="Nội dung liên hệ..."
                                    ></textarea>
                                </span>
                                <input
                                    type="submit"
                                    value="Gửi liên hệ"
                                    class="wpcf7-form-control wpcf7-submit"
                                ></input>
                            </p>
                        </div>
                    </form>
                </div>
            </TextWrapper>
        </DefaultWrapper>
    );
}

export default Contact;
