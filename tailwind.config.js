const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        grey: '#595959',
        blackAccent: '#0C0C0C',
        accent: '#E4A550',
        orange: '#F2A33C'
      },
      spacing: {
        gap: '100px'
      },
      height: {
        card: '500px'
      }
    },
  },
  plugins: [],
};
