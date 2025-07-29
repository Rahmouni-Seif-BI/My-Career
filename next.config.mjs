/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: ['cdn.vectorstock.com'],
  },
}

export default nextConfig
