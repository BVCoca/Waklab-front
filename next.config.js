/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      "static.ankama.com",
      "api.waklaboratory.fr",
      "methodwakfu.com"
    ],
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
