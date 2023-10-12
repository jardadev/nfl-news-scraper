/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

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
