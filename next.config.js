/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://127.0.0.1:5000/api/:path*',
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.bleacherreport.com',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'i.bleacherreport.net',
				port: '',
				pathname: '/images/**',
			},
		],
	},
};

module.exports = nextConfig;
