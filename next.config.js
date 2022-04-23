const withImages = require("next-images");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  ...withImages(),
  images: {
    loader: "akamai",
    path: "",
  },
  ...withPWA({
    pwa: {
      dest: "public",
    },
  }),
};
