/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    output: 'export',
    domains: ["upload.wikimedia.org", "image.tmdb.org"],
    unoptimized:true,
    
  }
}



module.exports = nextConfig