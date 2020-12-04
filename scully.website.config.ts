import {ScullyConfig, setPluginConfig} from '@scullyio/scully';

import {getSitemapPlugin} from '@gammastream/scully-plugin-sitemap';

const {getFlashPreventionPlugin} = require('@scullyio/scully-plugin-flash-prevention');
require('@notiz/scully-plugin-fouc');

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://owlly.ch',
  sitemapFilename: 'sitemap.xml',
  ignoredRoutes: ['/404'],
  routes: {},
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'website',
  outDir: './dist/static',
  routes: {
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
