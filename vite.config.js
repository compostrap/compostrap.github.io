// vite.config.js
const { resolve } = require('path')

module.exports = {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'dashboard.skeleton.html'),
			}
		}
	}
}
