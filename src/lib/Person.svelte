<script lang="ts">
	import type { Snippet } from 'svelte';
	import Img from './Img.svelte';
	import type { Picture } from './types';

	let {
		image,
		name,
		caption,
		person
	}: { image: Picture; name: string; caption: string; person: Snippet } = $props();
</script>

<div class="card bg-base-300 lg:card-side w-full rounded-3xl shadow-xl">
	<figure class="flex-shrink-0 lg:w-1/3">
		<Img class="h-full w-full rounded-3xl" src={image} alt="Bild von {name}" loading="eager" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<i class="text-xl">{caption}</i>
		<div class="py-4">
			{@render person()}
		</div>
	</div>
</div>
