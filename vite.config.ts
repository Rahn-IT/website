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
					w: '600;800;1000',
					quality: '75'
				});
			}
		}),
		sveltekit()
	]
});
