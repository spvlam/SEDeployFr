/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
   
  },
  images: {
    domains: ['avatar.oxro.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sunhouse.com.vn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "product.hstatic.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lioanhatlinh.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "darlingvietnam.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:  "media.loveitopcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:  "kangarooshopping.vn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bizweb.dktcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.beplephan.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/**",
      },
    
      {
        protocol: "https",
        hostname: "avatar.oxro.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
     
     
    ],
  },
};

module.exports = nextConfig;
