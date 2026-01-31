import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },
  ...nextConfig,
];

export default eslintConfig;