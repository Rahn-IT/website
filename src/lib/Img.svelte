<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-nocheck
	import type { Picture } from './types';

	let {
		src,
		alt = '',
		draggable = false,
		decoding = 'async',
		loading = 'lazy',
		class: classes = ''
	}: {
		src: Picture;
		alt: string;
		draggable?: boolean;
		decoding?: 'async' | 'sync' | 'auto';
		loading?: 'lazy' | 'eager';
		class?: string;
	} = $props();
</script>

<picture class={classes}>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images} type="image/{format}" />
	{/each}

	<img
		class={classes}
		src={src.img.src}
		{alt}
		{loading}
		{decoding}
		{draggable}
		width={src.img.w}
		height={src.img.h}
	/>
</picture>
