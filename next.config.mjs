/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cbcbofnrro2ph6fa.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
