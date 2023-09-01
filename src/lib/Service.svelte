<script lang="ts">
	export let title: string;
	export let image: string;
</script>

<div class="p-4">
	<div class=" card image-full w-full overflow-auto bg-base-100 shadow-xl">
		<figure class="absolute h-full w-full">
			<img class="h-full w-full object-cover" src={image} alt={title} />
		</figure>
		<div class="card-body h-fit">
			<h2 class="card-title text-2xl">{title}</h2>
			<slot />
		</div>
	</div>
</div>
