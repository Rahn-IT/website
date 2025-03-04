<script lang="ts">
	import Img from './Img.svelte';
	import type { Picture } from './types';

	let {
		name,
		href,
		image,
		class: classes = ''
	}: { name: string; href: string; image: Picture; class?: string } = $props();

	export { classes as class };
</script>

<a
	{href}
	class="ref h-full flex-shrink-0 flex-grow-0 snap-center hover:brightness-90 hover:filter {classes} flex"
	data-tip={name}
>
	<Img class="h-full object-contain" src={image} alt={name} />
</a>

<style>
	.ref {
		max-width: min(58vw, 32rem);
	}
</style>
