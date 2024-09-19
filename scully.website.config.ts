import {ScullyConfig, setPluginConfig} from '@scullyio/scully';

import {getSitemapPlugin} from '@gammastream/scully-plugin-sitemap';

const {getFlashPreventionPlugin} = require('@scullyio/scully-plugin-flash-prevention');
require('@notiz/scully-plugin-fouc');

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
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

export const config: ScullyConfig = {
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
