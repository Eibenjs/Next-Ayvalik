const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
    domains: ['i.imgur.com', 'bit.ly'],
  },
}

module.exports = nextConfig
