import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '',
	server: {
		fs: {
			allow: ['.', 'dist']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'if-function',
					'global-builtin',
					'color-functions'
				]
			}
		}
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		cssMinify: false,
		rollupOptions: {
			output: {
				manualChunks: undefined,
				chunkFileNames: '[name].js',
				entryFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
			input: {
				"sidebar-skeleton": path.resolve(__dirname, 'assets/sidebar-skeleton.js'),
				"sidebar-menu": path.resolve(__dirname, 'assets/sidebar-menu.js'),
				"sidebar-menu-custom": path.resolve(__dirname, 'assets/sidebar-menu-custom.js'),
				"dashboard-skeleton": path.resolve(__dirname, 'assets/dashboard-skeleton.js'),
			}
		}
	}
});
