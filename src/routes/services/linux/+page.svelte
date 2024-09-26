<script>
	import Service from '$lib/Service.svelte';
	import Phone from '$lib/info/Phone.svelte';

	import Proxmox from '$lib/images/services/Proxmox.jpg';
</script>

<svelte:head>
	<title>Linux und Proxmox</title>
	<meta name="description" content="Wir bieten Beratung und Dienstleistungen rund um Linux." />
</svelte:head>

<div class="py-8">
	<h1 class="py-8 text-center text-4xl">Linux und Proxmox</h1>

	<Service title="Proxmox-VE" image={Proxmox}>
		<p class="py-2">
			Mit unserer Expertise übernehmen wir die Einrichtung, Wartung und Überwachung Ihrer
			Proxmox-Infrastruktur. Wir kümmern uns um regelmäßige Updates, Backup-Lösungen und die
			Integration in Ihre bestehende IT-Landschaft.
		</p>

		<h3 class="pt-4 font-bold">Hohe Zuverlässigkeit</h3>
		<p class="py-2">
			Proxmox basiert auf der stabilen und bewährten Debian-Plattform,
			<br />
			sowie der leistungsfähigen KVM-Virtualisierung und bietet eine robuste und zuverlässige Virtualisierungsumgebung
			für Ihre Server.
		</p>

		<h3 class="pt-4 font-bold">Überlegende Datenintegrität</h3>
		<p class="py-2">
			Mit dem Dateisystem ZFS und dem Proxmox-Backup-Server im Gepäck,
			<br />
			bietet das Proxmox-Virtual-Environment einen hervorragenden Schutz Ihrer Daten.
		</p>
	</Service>

	<Service title="Linux-Server" image={Proxmox}>
		<p class="py-2">
			Sie haben Interesse am Einsatz von Linux oder suchen jemanden, der Ihre vorhandene
			Infrastruktur betreut?
			<br />
			Dann sind Sie bei uns genau richtig!
		</p>

		<h3 class="pt-4 font-bold">Flexibilität</h3>
		<p class="py-2">
			Ob eine PostgreSQL-Datenbank, ein Webserver oder gleich eine ganze Nextcloud - Linux-Server
			sind enorm flexibel. Nicht umsonst fußt das Internet auf den Schultern von Linux.
		</p>

		<h3 class="pt-4 font-bold">Effizienz</h3>
		<p class="py-2">
			Linux-Systeme können im höchsten maße resourcenschonend sein. Dadurch eignen sich
			Linux-Maschinen auch hervorragend um bestehende Windows-Netzwerke mit zusätzlichen Funktionen
			wie z.B. einem VPN-Zugang zu ergänzen.
		</p>
	</Service>

	<h2 class="pt-8 text-3xl">Noch Fragen?</h2>
	<p class="pt-2">
		Sind Sie sich unsicher, ob wir der richtige Ansprechpartner für Ihr Problem sind?
		<br />
		<br />
		Für Ihre Fragen haben wir immer ein offenes Ohr - und wenn wir doch einmal nicht helfen können, dann
		kennen wir vermutlich jemanden, der es kann.
		<br />
		<br />
		<Phone />
	</p>
</div>
