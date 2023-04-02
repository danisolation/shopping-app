// Layouts

// Pages
import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Contact from '~/pages/Contact';
import Camera from '~/pages/Product/Camera';
import News from '~/pages/News';

import Shop from '~/pages/Shop';
import SideBar from '~/pages/SideBar';
// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/introduction', component: Introduction },
    { path: '/contact', component: Contact },
    { path: '/product/camera', component: Camera },

    { path: '/news', component: News },

    { path: '/shop', component: Shop },
    { path: '/sidebar', component: SideBar },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
