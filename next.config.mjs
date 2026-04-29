/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei'
  ],
  reactStrictMode: true
};

export default nextConfig;
