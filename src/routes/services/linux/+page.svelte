<script>
	import Service from '$lib/Service.svelte';
	import Phone from '$lib/info/Phone.svelte';

	import Proxmox from '$lib/images/services/Proxmox.jpg';
	import Linux from '$lib/images/services/linux.jpg';
</script>

<svelte:head>
	<title>Linux und Proxmox</title>
	<meta name="description" content="Wir bieten Beratung und Dienstleistungen rund um Linux." />
</svelte:head>

<div class="py-8">
	<h1 class="py-8 text-center text-4xl">Linux und Proxmox</h1>

	<Service title="Proxmox-VE" image={Proxmox}>
		{#snippet serviceInfo()}
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
		{/snippet}
	</Service>

	<Service title="Linux-Server" image={Linux}>
		{#snippet serviceInfo()}
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
				Linux-Systeme können im höchsten Maße resourcenschonend sein. Dadurch eignen sich
				Linux-Maschinen auch hervorragend um bestehende Windows-Netzwerke mit zusätzlichen
				Funktionen wie z.B. einem VPN-Zugang zu ergänzen.
			</p>
		{/snippet}
	</Service>

	<h2 class="pt-8 text-3xl">Warum Linux?</h2>

	<h3 class="mt-4 text-2xl font-bold">Linux ist <u>Zuverlässig</u></h3>
	<p class="py-2 text-lg">
		Aufgrund der hohen Zuverlässigkeit setzen Unternehmen aus der ganzen Welt auf Linux.
		<br />
		Darunter Google, Amazon und selbst Microsoft nutzen Linux für deren Cloud-Infrastruktur.
	</p>

	<h3 class="mt-4 text-2xl font-bold">Linux ist <u>Sicher</u></h3>
	<p class="py-2 text-lg">
		Linux-Systeme bieten überragende Sicherheit.
		<br />
		Zusätzlich zu strengen Zugriffsrechten bietet Linux diverse Sandbox-Systeme.
		<br />
		Dank des simplen Aufbaus, bleibt weniger Angriffsfläche für Malware.
	</p>

	<h3 class="mt-4 text-2xl font-bold">Linux ist <u>Unabhängig</u></h3>
	<p class="py-2 text-lg">
		Linux gehört niemandem, da es Open-Source ist.
		<br />
		Das bedeutet, jeder kann den Programmcode kopieren, ändern und kostenlos verwenden, wie er möchte.
		<br />
		Die GPL-Lizenz verlangt lediglich, dass Änderungen und Verbesserungen wieder geteilt werden.
	</p>
	<p class="py-2 text-lg">
		<u>Niemand kann Ihnen die Lizenz entziehen</u>, denn sie brauchen keine.
		<br />
		Linux wird von einem weltweiten Zusammenschluss von Programmierern entwickelt und wird von keiner
		einzelnen Firma kontrolliert.<br /> So bleibt Ihre Infrastruktur sourverän.
	</p>

	<h2 class="pt-16 text-3xl">Noch Fragen?</h2>
	<p class="pt-2">
		Sind Sie sich unsicher, ob wir der richtige Ansprechpartner für Ihr Problem sind?
		<br />
		<br />
		Für Ihre Fragen haben wir immer ein offenes Ohr - und wenn wir doch einmal nicht helfen können, dann
		kennen wir vielleicht jemanden, der es kann.
		<br />
		<br />
		<Phone />
	</p>
</div>
