// Builds the demo of the compostrap package (https://github.com/compostrap/compostrap) into demo/ as static pages.
// The pages of the package are made for its dev server (they link src/scss, src/js and node_modules), so they are
// built by Vite here: styles and scripts are bundled, classic scripts of libraries are copied to demo/lib/.
// The package is taken from ../compostrap, or from the directory in COMPOSTRAP_DIR; it needs its `npm install`.
import { build } from 'vite';
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const source = path.resolve(root, process.env.COMPOSTRAP_DIR ?? '../compostrap');
const outDir = path.join(root, 'demo');

if (!existsSync(path.join(source, 'scripts/build-demo.js'))) {
	throw new Error(`The compostrap package was not found in ${source} (set COMPOSTRAP_DIR).`);
}
if (!existsSync(path.join(source, 'node_modules'))) {
	throw new Error(`Run "npm install" in ${source} first.`);
}

// the pages of the package are generated from its demo/ sources
execFileSync(process.execPath, ['scripts/build-demo.js'], { cwd: source, stdio: 'inherit' });

const pages = readdirSync(source).filter((file) => file.endsWith('.html'));

// Classic scripts (`<script src="node_modules/…">` without type="module", with or without defer) define globals, so Vite cannot bundle them:
// they are taken out of the page before Vite reads it and put back as `lib/<file>`, the files are copied below.
const libraries = new Map();
const classicScripts = [
	{
		name: 'classic-scripts-out',
		transformIndexHtml: {
			order: 'pre',
			handler: (html) => html.replace(/<script src="(node_modules\/[^"]+)"( defer)?><\/script>/g, (match, file, defer = '') => {
				libraries.set(path.basename(file), file);
				return `<!--lib:${path.basename(file)}${defer}-->`;
			}),
		},
	},
	{
		name: 'classic-scripts-back',
		transformIndexHtml: {
			order: 'post',
			handler: (html) => html.replace(/<!--lib:([^ >]+)( defer)?-->/g, (match, file, defer = '') => `<script src="lib/${file}"${defer}></script>`),
		},
	},
];

await build({
	configFile: false,
	root: source,
	base: '',
	plugins: classicScripts,
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				silenceDeprecations: ['import'],
			},
		},
	},
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: pages.map((file) => path.join(source, file)),
		},
	},
});

mkdirSync(path.join(outDir, 'lib'), { recursive: true });
for (const [name, file] of libraries) {
	cpSync(path.join(source, file), path.join(outDir, 'lib', name));
}

// pictures a script of a page sets by their path (photos of a product) are not seen by Vite
cpSync(path.join(source, 'demo/img'), path.join(outDir, 'demo/img'), { recursive: true });

console.log(`\n${pages.length} pages built into ${path.relative(root, outDir)}/`);
