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
				sidebarSkeleton: path.resolve(__dirname, 'assets/sidebar.skeleton.js'),
				sidebarMenu: path.resolve(__dirname, 'assets/sidebar.menu.js'),
				sidebarMenuCustom: path.resolve(__dirname, 'assets/sidebar.menu.custom.js'),
				sidebarDashboard: path.resolve(__dirname, 'assets/sidebar.dashboard.js'),
			}
		}
	}
});
