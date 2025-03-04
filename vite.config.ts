import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'webp;avif;jpg',
					as: 'picture',
					w: '600;800;1000',
					quality: '75'
				});
			}
		}),
		tailwindcss(),
		sveltekit()
	]
});
