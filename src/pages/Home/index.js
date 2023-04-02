import Item from '~/component/Item';
import { ItemsWrapper } from '~/component/Wrapper/ItemsWrapper';
import { ShoppingWrapper } from '~/component/Wrapper/ShoppingWrapper';
import images from '~/assets/images';
import Search from './Search';

const ITEMS = [
    {
        img: images.image1,
        des: 'Camera Ngụy Trang Bật Lửa IFocus BL02',
        price: '1.560.000',
        to: '/product/camera',
    },
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

function Home() {
    return (
        <ShoppingWrapper>
            <Search />
            <ItemsWrapper>
                {ITEMS.map((item, index) => (
                    <Item key={index} data={item} to={item.to} />
                ))}
            </ItemsWrapper>
        </ShoppingWrapper>
    );
}

export default Home;
