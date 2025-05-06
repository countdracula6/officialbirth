// postcss.config.js
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const productionPlugins = [
  cssnano({
    preset: ['default', {
      discardComments: { removeAll: true },
    }]
  })
];

export default {
  plugins: [
    postcssImport(), // Handles @import rules
    autoprefixer({   // Adds vendor prefixes
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ]
    }),
    ...(process.env.NODE_ENV === 'production' ? productionPlugins : [])
  ]
};