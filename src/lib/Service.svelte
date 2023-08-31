<script lang="ts">
	export let title: string;
	export let image: string;
</script>

<div class="p-4">
	<div class="card image-full card-side h-96 bg-base-100 shadow-xl">
		<figure class=""><img src={image} alt={title} /></figure>
		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<slot />
		</div>
	</div>
</div>
