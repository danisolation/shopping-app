import { ItemsWrapper } from '~/component/Wrapper/ItemsWrapper';
import { ShoppingWrapper } from '~/component/Wrapper/ShoppingWrapper';
import images from '~/assets/images';
import Item from '~/component/Item';

const ITEMS = [
    {
        img: images.news01,
        des: '3 Mẫu camera ngụy trang siêu nhỏ đặc biệt',
        title: 'Trong một thế giới đầy những phát minh khoa học đã giúp thay đổi cuộc ...',
        price: '',
        to: '/news/news01',
    },
    {
        img: images.news02,
        des: 'Thuốc rụng râu triệt râu vĩnh viễn cho nam giới',
        title: 'Mình, nhân viên văn phòng, 29 tuổi và chưa hề có một mảnh tình vắt ...',
        to: '/news/news01',
    },
    {
        img: images.news03,
        des: 'Đi tìm những model camera ngụy trang pin lâu nhất',
        title: 'Đối với các thiết bị điều khiển từ xa, pin là một trong những vấn ...',
        to: '/news/news01',
    },
];

function News() {
    return (
        <ShoppingWrapper>
            <ItemsWrapper>
                {ITEMS.map((item, index) => (
                    <Item key={index} data={item} to={item.to} />
                ))}
            </ItemsWrapper>
        </ShoppingWrapper>
    );
}

export default News;
