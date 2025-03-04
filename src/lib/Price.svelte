<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		name,
		netto,
		priceInfo = '',
		notes
	}: { name: string; netto: number; priceInfo?: string; notes?: Snippet } = $props();
</script>

<div class="flex flex-row flex-wrap border-t p-4 last:border-b">
	<div class="w-72">
		<div class="font-bold">{name}</div>
		<div><i>{priceInfo}</i></div>
	</div>
	<div>
		<nobr class="flex w-24 items-center justify-end gap-0 px-8">
			{(netto * 1.19).toLocaleString(
				undefined, // leave undefined to use the visitor's browser
				{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
			)} €
		</nobr>
		<span class="text-sm">inkl. MwSt.</span>
	</div>
	<div class="col-span-2 p-2">
		{#if notes !== undefined}
			{@render notes()}
		{/if}
	</div>
</div>
