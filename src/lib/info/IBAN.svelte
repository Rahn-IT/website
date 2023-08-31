<script lang="ts">
	import { browser } from '$app/environment';
	import { iban } from './info';
	let nr = '';
	if (browser) {
		nr = iban();
	}

	let classes = '';
	export { classes as class };
</script>

<span class={classes}>
	{nr}
</span>
