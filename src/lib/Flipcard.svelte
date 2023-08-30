<script lang="ts">
	let classes = '';
	export { classes as class };

	export let cardClass = '';
</script>

<div class="container {classes}">
	<div class="card relative h-full w-full {cardClass} ">
		<div class="front absolute h-full w-full">
			<slot name="front" />
		</div>
		<div class="back absolute h-full w-full">
			<slot name="back" />
		</div>
	</div>
</div>

<style>
	.container {
		perspective: 2000px;
	}

	.container:hover > .card {
		transform: rotateY(180deg);
	}

	.card {
		transition: transform 1.5s;
		transform-style: preserve-3d;
	}

	.front,
	.back {
		backface-visibility: hidden;
	}

	.back {
		transform: rotateY(180deg);
	}
</style>
