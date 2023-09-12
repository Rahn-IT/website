<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-nocheck
	import type { Picture } from './types';

	export let src: Picture;

	export let alt = '';
	export let draggable = false;

	export let decoding: 'async' | 'sync' | 'auto' = 'async';

	export let loading: 'lazy' | 'eager' = 'eager';

	let classes = '';
	export { classes as class };
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
	{/each}

	<img
		src={src.img.src}
		{alt}
		class={classes}
		{loading}
		{decoding}
		{draggable}
		width={src.img.w}
		height={src.img.h}
	/>
</picture>
