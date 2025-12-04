import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000', // ton backend Laravel
                changeOrigin: true,               // fait croire que la requête vient du backend
                secure: false,                    // si tu n’utilises pas HTTPS
            },
        },
    },
});

