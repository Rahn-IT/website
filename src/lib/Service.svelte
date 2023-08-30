<script lang="ts">
	import Flipcard from './Flipcard.svelte';

	export let title: string;
	export let image: string;
</script>

<Flipcard class="h-96 w-96" cardClass="rounded-3xl shadow-xl overflow-hidden">
	<div
		slot="front"
		class="relative flex h-full w-full items-center bg-cover"
		style="background-image: url('{image}');"
	>
		<h2
			class="text-bold flex h-16 w-full items-center justify-center rounded-none text-3xl backdrop-blur-lg"
		>
			{title}
		</h2>
	</div>
	<div slot="back" class="h-full w-full bg-base-200">
		<slot />
	</div>
</Flipcard>
