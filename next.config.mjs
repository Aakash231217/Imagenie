/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                default-src 'self';
                script-src 'self' 'unsafe-eval' 'unsafe-inline' https://scdn.clerk.com;
                connect-src 'self' https://scdn.clerk.com;
                img-src 'self' data:;
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                font-src 'self' https://fonts.gstatic.com;
                frame-src 'self';
              `.replace(/\n/g, ''),
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  