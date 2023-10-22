/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["static.ankama.com", "api.waklaboratory.fr"], // Ajoutez tous les domaines qui hébergent vos images
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
