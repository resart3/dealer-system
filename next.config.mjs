/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/upload-dealer',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
