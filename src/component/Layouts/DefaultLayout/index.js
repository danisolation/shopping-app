import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../component/Header';
import Footer from '../component/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
