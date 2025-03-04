<script lang="ts">
	import type { Snippet } from 'svelte';
	import Img from './Img.svelte';
	import type { Picture } from './types';

	let {
		title,
		image,
		loading,
		serviceInfo
	}: { title: string; image: Picture; loading?: 'lazy' | 'eager'; serviceInfo: Snippet } = $props();
</script>

<div class="p-4">
	<div class=" card image-full bg-base-100 w-full overflow-auto shadow-xl">
		<figure class="absolute h-full w-full">
			<Img class="h-full w-full object-cover" src={image} alt={title} {loading} />
		</figure>
		<div class="card-body h-fit !text-neutral-100 backdrop-blur-sm backdrop-brightness-50">
			<div class="m-0 p-0 backdrop-blur-sm">
				<h2 class="card-title text-2xl">{title}</h2>
				{@render serviceInfo()}
			</div>
		</div>
	</div>
</div>
