<script lang="ts">
	import Img from './Img.svelte';
	import type { Picture } from './types';

	export let name: string;
	export let href: string;
	export let image: Picture;
	let classes = '';
	export { classes as class };
</script>

<a
	{href}
	class="h-full flex-shrink-0 flex-grow-0 snap-center hover:brightness-125 hover:filter {classes}"
	data-tip={name}
>
	<Img class="h-full w-auto max-w-md object-contain" src={image} alt={name} />
</a>
