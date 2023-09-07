<script lang="ts">
	export let title: string;
</script>

<div>
	<table class="table text-lg">
		<thead class="text-lg">
			<th>{title}</th>
			<th>Preis</th>
		</thead>
		<tbody>
			<slot />
		</tbody>
	</table>
</div>
