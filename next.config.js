const withImages = require("next-images");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ...withImages(),
  images: {
    loader: 'akamai',
    path: '',
  },
};
