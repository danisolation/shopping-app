// Layouts

// Pages
import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Contact from '~/pages/Contact';

import News from '~/pages/News';

import Shop from '~/pages/Shop';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/introduction', component: Introduction },
    { path: '/contact', component: Contact },

    { path: '/news', component: News },

    { path: '/shop', component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
