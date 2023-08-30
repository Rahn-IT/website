<script lang="ts">
	import { browser } from '$app/environment';
	import { mail } from './info';
	let m = '';
	if (browser) {
		m = mail();
	}

	let classes = 'link-hover link';
	export { classes as class };
</script>

<a class={classes} href="mailto:{m}">
	<slot>
		E-Mail: {m}</slot
	>
</a>
