  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      localPatterns: [
        {
          pathname: "/assets/Images/**",
          search: "",
        },
      ],
    },
  };

  export default nextConfig;
