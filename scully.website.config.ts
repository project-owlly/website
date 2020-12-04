import {ScullyConfig} from '@scullyio/scully';
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
