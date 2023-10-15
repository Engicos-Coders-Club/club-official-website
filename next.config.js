/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'akamai',
        path: './loaders/akamai.js',
        unoptimized:true
    },
}

export default nextConfig
