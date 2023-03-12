// Layouts

// Pages
import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Contact from '~/pages/Contact';
import Policy from '~/pages/Policy';
import News from '~/pages/News';
import Help from '~/pages/Help';
import Shop from '~/pages/Shop';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/introduction', component: Introduction },
    { path: '/contact', component: Contact },
    { path: '/policy', component: Policy },
    { path: '/news', component: News },
    { path: '/help', component: Help },
    { path: '/shop', component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
