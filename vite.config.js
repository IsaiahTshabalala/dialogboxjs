/**File. ./vite.config.js
 * Vite configuration file for building the DialogBox React component library.
 * This configuration sets up the build process to output both ES and CommonJS modules.
 * It also ensures that PropTypes are treated as external dependencies.
 * Courtesy of: ChatGPT.
 * ============================================================================
 * Date       Version    Author         Description
 * ===========================================================================
 * 2025/12/01 1.0.0      ChatGPT & ITA  Initial version
 * 2025/12/01 1.0.2      ChatGPT & ITA  Removed prop-types from the external dependencies list.
 * ===========================================================================
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // IMPORTANT for React 17+ automatic JSX transform
      jsxRuntime: 'automatic'
    })
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'DialogBoxJS',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // React and ReactDOM must remain external
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes'
        }
      }
    }
  }
});
