<script lang="ts">
	import Img from './Img.svelte';
	import type { Picture } from './types';

	export let image: Picture;
	export let name: string;
	export let caption: string;
</script>

<div class="card w-full rounded-3xl bg-base-300 shadow-xl lg:card-side">
	<figure class="flex-shrink-0 lg:w-1/3">
		<Img class="h-full w-full rounded-3xl" src={image} alt="Bild von {name}" loading="eager" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<i class="text-xl">{caption}</i>
		<div class="py-4">
			<slot />
		</div>
	</div>
</div>
