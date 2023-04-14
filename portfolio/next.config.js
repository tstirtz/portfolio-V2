/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    return Object.assign({}, config, {
      module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([
          {
            test: /\.css$/,
            loader: "raw-loader",
          },
        ]),
      }),
    });
  },
};

module.exports = nextConfig;
