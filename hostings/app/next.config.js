const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  webpack: (config, _) => {
    return config;
  },
});
