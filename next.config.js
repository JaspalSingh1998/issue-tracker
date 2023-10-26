/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {
                source: '/:path*',
                headers: [
                    {key: 'no-referrer', value: 'no-referrer'}
                ]
            }
        ]
    }
}

module.exports = nextConfig
