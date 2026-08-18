import type { NextConfig } from 'next';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const path =
  process.env.GITHUB_ACTIONS === 'true' && repo && !repo.endsWith('.github.io') ? `/${repo}` : '';
const config: NextConfig = {
  output: 'export',
  basePath: path,
  assetPrefix: path || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};
export default config;
