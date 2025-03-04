<script lang="ts">
	import { name, street, plz, city } from './info';
	let { withName }: { withName: boolean } = $props();
</script>

<address>
	{#if withName}
		<div>{name}</div>
	{/if}
	<div>{street}</div>
	<div>{plz} {city}</div>
</address>
