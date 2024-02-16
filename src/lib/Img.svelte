<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-nocheck
	import type { Picture } from './types';

	export let src: Picture;

	export let alt = '';
	export let draggable = false;

	export let decoding: 'async' | 'sync' | 'auto' = 'async';

	export let loading: 'lazy' | 'eager' = 'lazy';

	let classes = '';

	export { classes as class };
</script>

<picture class={classes}>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images} type="image/{format}" />
	{/each}

	<img
		class="h-full w-full object-contain"
		src={src.img.src}
		{alt}
		{loading}
		{decoding}
		{draggable}
		width={src.img.w}
		height={src.img.h}
	/>
</picture>
