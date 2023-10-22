/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/minerva-cookbook', 
  images: {
    loader: "custom",
    loaderFile: './app/loader.tsx',
  }
}


module.exports = nextConfig
