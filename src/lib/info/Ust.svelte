<script lang="ts">
	import { browser } from '$app/environment';
	import { ust } from './info';
	let nr = '';
	if (browser) {
		nr = ust();
	}

	let classes = '';
	export { classes as class };
</script>

<span class={classes}>
	{nr}
</span>
