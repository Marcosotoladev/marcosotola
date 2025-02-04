import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Agregar un loader para archivos .webm
    config.module.rules.push({
      test: /\.webm$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/videos/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

