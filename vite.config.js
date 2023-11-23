import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';
// import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/scss/app.scss' ,
                'resources/js/app.js',
                'resources/js/xxx.js'],
            refresh: true,
        }),
        // react(),
        // vue({
        //     template: {
        //         transformAssetUrls: {
        //             base: null,
        //             includeAbsolute: false,
        //         },
        //     },
        // }),
    ],
});
