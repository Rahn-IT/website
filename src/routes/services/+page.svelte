<script>
	import Service from '$lib/Service.svelte';
	import Phone from '$lib/info/Phone.svelte';
</script>

<svelte:head>
	<title>Leistungen</title>
	<meta
		name="description"
		content="Von Administration über Netzwerktehnik bis zur Programmierung eigener Software - Bei uns finden Sie, was Sie brauchen."
	/>
</svelte:head>

<div class="py-8">
	<Service title="Persönliche Beratung" image="/images/services/Beratung.jpg">
		<div class="p-2">
			<p>Eine erfolgreiche Zusammenarbeit braucht Vertrauen.</p>
			<p>Egal welches Problem oder welche Fragen Sie haben, wir haben immer ein offenes Ohr.</p>
			<p>Bei uns bekommen Sie eine <b>persönliche</b> und <b>ehrliche</b> Beratung.</p>
		</div>

		<div class="p-2">
			<p>Unser Ziel ist es, Sie und Ihr Unternehmen zu unterstützen.</p>
			<p>Jedes Unternehmen ist anders. Wir gehen auf Ihre individuellen Bedürfnisse ein.</p>
		</div>

		<div class="p-2">
			<p>Noch Fragen?</p>
			<p>Rufen Sie uns einfach an:</p>
			<Phone />
		</div>
	</Service>

	<Service title="Administration" image="/images/services/Administration.jpg">
		<div class="p-2">
			<p>
				In der digitalen Welt ist eine reibungslose IT von entscheidender Bedeutung für Ihr
				Unternehmen.
			</p>
			<p>
				Überlassen Sie die komplexität Ihrer Infrastruktur uns und konzentrieren Sie sich auf das
				was zählt!
			</p>
		</div>

		<div class="p-2">
			<p>Wir übernehmen die Wartung und Überwachnung Ihrer Server, Arbeitsplätze und Software.</p>
			<p>Neu, alt, Windows oder Linux - unsere Kompetenzen sind weit gefächert.</p>
		</div>
	</Service>

	<Service title="Netzwerk" image="/images/services/Netzwerk.jpg">
		<div class="p-2">
			<p>
				Ihr Netzwerk ist das Rückrad ihrer Infrastruktur. Egal wo Sie arbeiten wollen, Sie benötigen
				eine Verbindung.
			</p>
			<p>
				Dabei können die Herausforderungen vielseitig sein. Wir unterstützen Sie dabei,
				einsatzbereit zu bleiben.
			</p>
		</div>

		<div class="p-2">
			<p>Wir übernehmen die Planung, Installation und Instandhaltung Ihres Netzwerks.</p>
			<p>Dabei setzen wir auf intelligente Systeme, um Ihren Bedürfnissen gerecht werden.</p>
		</div>
	</Service>

	<Service title="Backup" image="/images/services/Festplatte.jpg">
		<div class="p-2">
			<p><i>Auf das Beste hoffen, auf das schlimmste vorbereitet sein</i></p>
		</div>
		<div class="p-2">
			<p>
				Egal wie gut Sie sich vorbereiten, ein Datenverlust kann immer auftreten und bedeutet im
				schlimmsten Fall das Ende Ihres Unternehmens.
			</p>
			<p>Wir setzen mehrschichtige Backups und Redundanzen ein um Ihre Daten zu sichern.</p>
		</div>
		<div class="p-2">
			<p>
				<a class="link-hover link" href="/emergency"
					>Mit uns sind Sie bereit für den Fall der Fälle - unser Notfalldienst ist immer für Sie
					da.</a
				>
			</p>
			<p>Egal wann, egal wo, im Katastrophenfall stehen wir fest an Ihrer Seite.</p>
		</div>
	</Service>

	<Service title="Cyber-Sicherheit" image="/images/services/Security.jpg">
		<div class="p-2">
			<p>Von Jahr zu Jahr steigt die Anzahl der Angriffe auf IT-Systeme.</p>
			<p>Ein erfolgreicher Angriff kann großen Schaden anrichten.</p>
		</div>

		<div class="p-2">
			<p>Wir sichern Ihre Infrastruktur und minimieren Ihre Angriffsfläche.</p>
			<p>Dabei setzen wir auf moderne Sicherheitslösungen und intelligente Firewalls.</p>
		</div>

		<div class="p-2">
			<p>Die Sicherheit Ihres unternehmens ist Sache aller beteiligten.</p>
			<p>Wir beantworten Fragen und Schulen Sie und Ihr Personal.</p>
		</div>
	</Service>

	<Service title="Telefonie" image="/images/services/Telefonie.jpg">
		<div class="p-2">
			<p>
				Ein Erfolgreiches Unternehmen braucht eine vielseitige und zuverlässige Telefonie-Lösung.
			</p>
			<p>Wir planen und installieren Ihre Telefonanlage und Ihre Telefoniegeräte.</p>
		</div>

		<div class="p-2">
			<p>
				Als Agfeo-Partner bieten wir die nötige Erfahrung und Kompetenz um individuelle Lösungen zu
				erstellen.
			</p>
			<p>
				Aber auch Ihre vorhandene Infrastruktur können wir pflegen und erweitern - egal von welchem
				Hersteller.
			</p>
		</div>
	</Service>

	<Service title="Videoüberwachung" image="/images/services/Videoüberwachung.jpg">
		<div class="p-2">
			<p>Nicht nur die digitale Sicherheit ist relavant.</p>
			<p>Behalten Sie von überall aus eine wachsamen Auge auf Ihre Geschäftgebäude.</p>
		</div>

		<div class="p-2">
			<p>Wir planen und installieren moderne Videoüberwachungssysteme.</p>
		</div>
	</Service>

	<Service title="Programmierung" image="/images/services/Programmierung.jpg">
		<div class="p-2">
			<p>Manchmal reicht eine fertige Lösung nicht aus.</p>
			<p>Sie brauchen Software, die speziell auf Sie zugeschnitten ist.</p>
		</div>

		<div class="p-2">
			<p>Wir entwickeln individuelle Software-Lösungen ganz nach Ihren Bedürfnissen.</p>
			<p>Dabei setzen wir auf eine Balance aus erprobten Techniken und modernen Standarts.</p>
		</div>

		<div class="p-2">
			<p>Sind Sie mit Ihrem anliegen nicht alleine?</p>
			<p>
				Vereinen Sie Ihre Kräfte mit anderen und finanzieren Sie gemeinsam eine Open-Source Lösung.
			</p>
		</div>
	</Service>
</div>
