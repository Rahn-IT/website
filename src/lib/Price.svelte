<script lang="ts">
	export let name: string;
	export let netto: number;
	export let priceInfo = '';
</script>

<div class="flex flex-row flex-wrap border-t p-4 last:border-b">
	<div class="w-72">
		<div class="font-bold">{name}</div>
		<div><i>{priceInfo}</i></div>
	</div>
	<nobr class="flex w-24 items-center justify-end px-8">
		{(netto * 1.19).toLocaleString(
			undefined, // leave undefined to use the visitor's browser
			{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
		)} €
	</nobr>
	<div class="col-span-2 p-2"><slot /></div>
</div>
