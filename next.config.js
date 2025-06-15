/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'unpkg.com',
        port: '',
        pathname: '/leaflet@1.9.4/dist/images/**',
      },
    ],
    // Enable dangerouslyAllowSVG for SVG support if needed
    dangerouslyAllowSVG: true,
    // Use the new contentDispositionType option to fix hydration errors with SVGs
    contentDispositionType: 'attachment',
  },
  // Configure for GitHub Pages (uncomment and adjust if needed)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;
