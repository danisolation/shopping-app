import { DefaultWrapper } from '~/component/Wrapper/DefaultWrapper';
import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import { TextWrapper } from '~/component/Wrapper/TextWrapper';

const cx = classNames.bind(styles);

function Introduction() {
    return (
        <DefaultWrapper>
            <TextWrapper className={cx('intro')}>
                <h1>Giới thiệu</h1>
                <p>Có nhiều khi tôi muốn thay đổi mọi thứ</p>
                <p>Có nhiều khi tôi muốn thay đổi mọi thứ</p>
                <p>Có nhiều khi tôi muốn thay đổi mọi thứ</p>
                <p>Có nhiều khi tôi muốn thay đổi mọi thứ</p>
                <p>Có nhiều khi tôi muốn thay đổi mọi thứ</p>
                <p>Có nhiều khi tôi muốn thay đổi mọi thứ</p>
            </TextWrapper>
        </DefaultWrapper>
    );
}

export default Introduction;
