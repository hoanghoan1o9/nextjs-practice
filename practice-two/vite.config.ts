import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: 'constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: 'utilities',
        replacement: path.resolve(__dirname, 'src/utilities'),
      },
      {
        find: 'models',
        replacement: path.resolve(__dirname, 'src/models'),
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: 'services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      {
        find: 'hocs',
        replacement: path.resolve(__dirname, 'src/hocs'),
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
      {
        find: 'contexts',
        replacement: path.resolve(__dirname, 'src/contexts'),
      },
      {
        find: 'helpers',
        replacement: path.resolve(__dirname, 'src/helpers'),
      },
    ],
  },
});
