import { DefaultWrapper } from '~/component/Wrapper/DefaultWrapper';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import ItemNews from '~/component/SideBar/ItemNews';
import { ItemNewsWrapper } from '~/component/Wrapper/ItemNewsWrapper';

const ITEMNEWS = [
    {
        img: images.image5,
        des: 'Mua 1 tặng 1.',
    },
    {
        img: images.image5,
        des: 'Kinh nghiệm chọn đồ second hand phù hợp.',
    },
    {
        img: images.image5,
        des: 'Chúc mừng sinh nhật Latish.',
    },
    {
        img: images.image5,
        des: 'Những mẫu hàng mới.',
    },
    {
        img: images.image5,
        des: 'Không biết viết gì.',
    },
];
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <DefaultWrapper>
            <div className={cx('sidebar')}>
                <ItemNewsWrapper>
                    <h2 className={cx('title')}>Bài viết mới</h2>
                    {ITEMNEWS.map((item, index) => (
                        <ItemNews key={index} data={item} to="/#" />
                    ))}
                </ItemNewsWrapper>
            </div>
        </DefaultWrapper>
    );
}
export default SideBar;
