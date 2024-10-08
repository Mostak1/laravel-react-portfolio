import './bootstrap';
import '../css/app.css';
import '../css/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.min.css';

// import '@fortawesome/fontawesome-free/css/all.min.css';

import { Link } from '@inertiajs/react';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
