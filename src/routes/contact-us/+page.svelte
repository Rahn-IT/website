<script>
	import LogoStandalone from '$lib/images/logo-standalone.svelte';
import Address from '$lib/info/Address.svelte';
	import Mail from '$lib/info/Mail.svelte';
	import Phone from '$lib/info/Phone.svelte';
	import VCard from '$lib/info/VCard.svelte';
</script>

<svelte:head>
	<title>Kontakt</title>
	<meta name="description" content="Kontaktieren Sie uns per E-Mail oder Telefon" />
</svelte:head>

<div class="card card-side shadow-xl mt-10 bg-base-300">
    <figure>
        <LogoStandalone class="pl-6" />
    </figure>
	<div class="card-body text-xl">
		<div class="card-body">
            <Address withName />
            <div>
                <Mail />
            </div>
            <div>
                <Phone />
            </div>
        </div>
		<div class="card-actions justify-end">
			<VCard class="btn text-lg">Zu Kontakten hinzufügen</VCard>
		</div>
	</div>
</div>
