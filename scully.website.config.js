'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.config = void 0;
const scully_1 = require('@scullyio/scully');
const scully_plugin_sitemap_1 = require('@gammastream/scully-plugin-sitemap');
const {getFlashPreventionPlugin} = require('@scullyio/scully-plugin-flash-prevention');
require('@notiz/scully-plugin-fouc');
const SitemapPlugin = (0, scully_plugin_sitemap_1.getSitemapPlugin)();
(0, scully_1.setPluginConfig)(SitemapPlugin, {
  urlPrefix: 'https://owlly.ch',
  sitemapFilename: 'sitemap.xml',
  ignoredRoutes: ['/404'],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './src/news',
      },
    },
  },
});
exports.config = {
  puppeteerLaunchOptions: {
    executablePath: '/opt/homebrew/bin/chromium',
  },
  projectRoot: './src',
  projectName: 'website',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './src/news',
      },
    },
    '/o/:slug': {
      type: 'json',
      slug: {
        url: 'https://europe-west6-project-owlly.cloudfunctions.net/owlly/',
        property: 'data.slug',
      },
      postRenderers: ['fouc', getFlashPreventionPlugin()],
    },
  },
};
