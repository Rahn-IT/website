<script lang="ts">
	export let name: string;
	export let href: string;
	export let image: string;
	let classes = '';
	export { classes as class };
</script>

<a
	{href}
	class="h-full flex-shrink-0 flex-grow-0 snap-center hover:brightness-125 hover:filter {classes}"
	data-tip={name}
>
	<img class="h-full w-auto max-w-md object-contain" src={image} alt={name} />
</a>
