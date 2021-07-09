module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/fonts/:path*',
        destination: 'http://melodics.com/fonts/:path*'
      },
    ]
  },
}
