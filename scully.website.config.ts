import {ScullyConfig, setPluginConfig} from '@scullyio/scully';
import {getSitemapPlugin} from '@gammastream/scully-plugin-sitemap';

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
    '/o/:id': {
      type: 'contentFolder',
      id: {
        folder: './owlly',
      },
    },
  },
};
