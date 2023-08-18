const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.glsl/,
            type: "asset/source",
        })
        return config
    },
    reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)
