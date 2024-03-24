
const {
    createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();



/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    // SVG 사용 관련 모듈
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: { not: /components/ },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: /components/,
                use: ['@svgr/webpack'],
            }
        );
        return config;
    }};


module.exports = withVanillaExtract(nextConfig);

