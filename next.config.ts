import type { NextConfig } from "next";
// i18n plugin
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};
// export by default by next;
// export default nextConfig;

// Export with i18n plugin
export default withNextIntl(nextConfig);
