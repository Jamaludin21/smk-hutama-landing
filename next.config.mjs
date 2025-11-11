/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        pathname: "/plus-assets/**",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
        pathname: "/asset/uploads/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/200**",
      },
      {
        protocol: "https",
        hostname: "a1epuokipdvggoec.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
