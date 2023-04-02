// Layouts

// Pages
import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Contact from '~/pages/Contact';
import Camera from '~/pages/Product/Camera';
import News from '~/pages/News';
import Watch from '~/pages/Product/Watch';
import Shop from '~/pages/Shop';
import SideBar from '~/pages/SideBar';
import News01 from '~/pages/News/NewsPage/News01';
// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/introduction', component: Introduction },
    { path: '/contact', component: Contact },
    { path: '/product/camera', component: Camera },
    { path: '/product/watch', component: Watch },
    { path: '/news', component: News },
    { path: '/news/news01', component: News01 },
    { path: '/shop', component: Shop },
    { path: '/sidebar', component: SideBar },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
