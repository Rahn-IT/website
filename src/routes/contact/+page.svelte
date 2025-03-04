<script>
	import BusninessHours from '$lib/BusninessHours.svelte';
	import LogoStandalone from '$lib/images/logo-standalone.svelte';
	import Address from '$lib/info/Address.svelte';
	import Mail from '$lib/info/Mail.svelte';
	import Phone from '$lib/info/Phone.svelte';
	import VCard from '$lib/info/VCard.svelte';
</script>

<svelte:head>
	<title>Kontakt</title>
	<meta name="description" content="Kontaktieren Sie uns per E-Mail oder Telefon." />
</svelte:head>

<div class="card bg-base-300 md:card-side my-20 shadow-xl">
	<figure>
		<LogoStandalone class="h-auto w-96 p-10" />
	</figure>
	<div class="card-body px-0 text-xl md:px-4">
		<div class="card-body">
			<Address withName />
			<div class="divider">Kontaktinformationen</div>
			<div>
				<Mail />
			</div>
			<div>
				<Phone />
			</div>
			<div class="divider">Geschäftszeiten</div>
			<BusninessHours />
		</div>
		<div class="card-actions justify-center md:justify-end">
			<VCard class="btn btn-neutral text-lg">Zu Kontakten hinzufügen</VCard>
		</div>
	</div>
</div>
