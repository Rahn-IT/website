<script lang="ts">
	import { browser } from '$app/environment';
	import { iban } from './info';
	let nr = '';
	if (browser) {
		nr = iban();
	}

	let classes = 'link-hover link';
	export { classes as class };
</script>

<a class={classes} href="tel:+49{nr.substring(1)}">
	<slot>
		{nr}</slot
	>
</a>
