<script lang="ts">
	import { browser } from '$app/environment';
	import { phone } from './info';
	let tel = '';
	if (browser) {
		tel = phone();
	}

	let classes = 'link-hover link';
	export { classes as class };
</script>

<a class={classes} href="tel:+49{tel.substring(1)}">
	<slot>
		Tel: {tel}</slot
	>
</a>
