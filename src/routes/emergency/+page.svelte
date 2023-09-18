<script>
	import BusninessHours from '$lib/BusninessHours.svelte';
	import Phone from '$lib/info/Phone.svelte';
</script>

<svelte:head>
	<title>24 Stunden Notdienst</title>
	<meta
		name="description"
		content="Im Notfall sind wir nur einen Anruf entfernt. 24 Stunden am Tag, 365 Tage im Jahr."
	/>
</svelte:head>

<div class="py-4">
	<h1 class="py-8 text-center text-4xl">Im Notfall immer für Sie da</h1>

	<p class="py-2">
		Steht Ihr Betrieb still weil Ihre IT streikt?
		<br />
		Wir bieten schnelle und professionelle Hilfe bei dringenden Problemen.
	</p>
	<p class="py-2">
		Falls es sich nicht um einen dringenden Notfall handelt, nutzen Sie bitte unsere regulären
		Geschäftszeiten.
	</p>
	<p class="py-2">
		<BusninessHours />
		<b>Auch an Sonn- und Feiertagen</b>
	</p>
</div>
<div>
	<Phone class="link-hover link text-2xl" />
</div>
<div class="py-2">
	<Phone class="btn text-xl">Rufen Sie uns an!</Phone>
</div>
