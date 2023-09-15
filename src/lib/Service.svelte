<script lang="ts">
	import Img from './Img.svelte';
	import type { Picture } from './types';

	export let title: string;
	export let image: Picture;
	export let loading: 'lazy' | 'eager' = 'lazy';
</script>

<div class="p-4">
	<div class=" card image-full w-full overflow-auto bg-base-100 shadow-xl">
		<figure class="absolute h-full w-full">
			<Img class="h-full w-full object-cover" src={image} alt={title} {loading} />
		</figure>
		<div class="card-body h-fit dark:!text-neutral-200">
			<h2 class="card-title text-2xl">{title}</h2>
			<slot />
		</div>
	</div>
</div>
