import Item from '~/component/Item';
import { ItemsWrapper } from '~/component/Wrapper/ItemsWrapper';
import { ShoppingWrapper } from '~/component/Wrapper/ShoppingWrapper';
import images from '~/assets/images';

const ITEMS = [
    {
        img: images.image1,
        des: 'Camera Ngụy Trang Bật Lửa IFocus BL02',
        price: '1.560.000',
    },
    {
        img: images.image2,
        des: 'Camera ngụy trang đồng hồ treo tường iFocus ST27',
        price: '810.000',
    },
    {
        img: images.image3,
        des: 'Camera Ngụy Trang Module Siêu Nhỏ iFocus BV20',
        price: '1.500.000',
    },
    {
        img: images.image4,
        des: 'Máy hút mụn cám chuyên dụng Derma 110',
        price: '180.000',
    },
];

function Home() {
    return (
        <ShoppingWrapper>
            <ItemsWrapper>
                {ITEMS.map((item, index) => (
                    <Item key={index} data={item} to="/#" />
                ))}
            </ItemsWrapper>
        </ShoppingWrapper>
    );
}

export default Home;