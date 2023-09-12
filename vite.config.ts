import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'avif;webp',
					as: 'picture',
					w: '200;400;800;1200'
				});
			}
		}),
		sveltekit()
	]
});
