<script lang="ts">
	export let name: string;
	export let netto: number;
	export let priceInfo = '';
</script>

<tr>
	<td
		><div class="text-bold">{name}</div>
		<div><i>{priceInfo}</i></div></td
	>
	<td
		>{(netto * 1.19).toLocaleString(
			undefined, // leave undefined to use the visitor's browser
			{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
		)} €</td
	>
	<td><slot /></td>
</tr>
