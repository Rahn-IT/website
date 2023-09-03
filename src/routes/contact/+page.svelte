<script>
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

<div class="card my-20 bg-base-300 shadow-xl md:card-side">
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
			<div>
				<table class="table table-xs w-64 p-0 text-lg">
					<tr>
						<td>Mo-Do:</td>
						<td>09:00 - 16:30</td>
					</tr>
					<tr>
						<td>Fr:</td>
						<td>09:00 - 12:00</td>
					</tr>
				</table>
				<b>24 Stunden Notdienst</b>
			</div>
		</div>
		<div class="card-actions justify-center md:justify-end">
			<VCard class="btn btn-neutral text-lg">Zu Kontakten hinzufügen</VCard>
		</div>
	</div>
</div>
