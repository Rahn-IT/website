<script lang="ts">
	import Price from '$lib/Price.svelte';
	import Mail from '$lib/info/Mail.svelte';
	import Phone from '$lib/info/Phone.svelte';
</script>

<svelte:head>
	<title>Preise</title>
	<meta name="description" content="Unsere Preise sind kein Geheimnis." />
</svelte:head>

<div class="py-4">
	<h1 class="py-8 text-center text-4xl">Unsere Preise sind kein Geheimnis.</h1>

	<div>
		<Price name="Anfahrt pro KM" netto={0.6} />
		<Price name="Dienstleistung pro Stunde" priceInfo="" netto={90}>
			{#snippet notes()}
				<div>Bei einer Anfahrt <b>unter 25 km</b> werden mindestens 0.25 Stunden berechnet.</div>
				<div>Bei einer Anfahrt <b>ab 25 km</b> werden mindestens 0.5 Stunden berechnet.</div>
			{/snippet}
		</Price>
	</div>

	<div class="py-8">
		<div>Unsere Preise für Geräte richten sich nach unseren aktuellen Einkaufspreisen.</div>
		<div>Für ein Angebot, rufen Sie uns an oder schreiben Sie uns eine E-Mail.</div>
		<div class="my-2"><Phone class="link-hover link py-2" /></div>
		<div class="my-2"><Mail class="link-hover link py-2" /></div>
	</div>
</div>
