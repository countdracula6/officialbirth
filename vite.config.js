import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  
  // CSS and PostCSS configuration
  css: {
    postcss: {
      plugins: [
        postcssImport(), // Handles @import rules
        autoprefixer() // Adds vendor prefixes
      ]
    },
    modules: {
      localsConvention: 'camelCase' // Enables CSS Modules camelCase
    }
  },

  // Asset handling
  assetsInclude: ['**/*.ttf', '**/*.woff2', '**/*.png'], // All font and image types

  // Build configuration
  build: {
    assetsInlineLimit: 4096, // Files smaller than 4kb will be inlined
    sourcemap: true, // Generate source maps
    chunkSizeWarningLimit: 1600, // Adjust warning limit for large chunks
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Better asset naming
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  },

  // Server configuration
  server: {
    port: 5173, // Default port (will fallback if taken)
    strictPort: false, // Allows port fallback
    open: true, // Automatically open browser
    hmr: {
      overlay: true // Hot module replacement
    }
  },

  // Preview configuration
  preview: {
    port: 4173, // Different from dev server
    open: true
  },

  // OptimizeDeps configuration
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'] // Pre-bundle these
  }
});