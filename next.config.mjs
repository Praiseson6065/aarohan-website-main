  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      domains: ['instagram.fccu9-4.fna.fbcdn.net'],
      localPatterns: [
        {
          pathname: "/assets/**",
          search: "",
        },
      ],
    },
  };

  export default nextConfig;
