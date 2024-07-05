/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pxmpntgdnptlsaykfgwh.supabase.co',
            port: '',
          },
        ],
      },
};

export default nextConfig;
