/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/client',
  publicPath: process.env.NODE_ENV === "production" ? process.env.HYDROGEN_ASSET_BASE_URL : "/build/",
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverBuildDirectory: 'build',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['.*'],
};
