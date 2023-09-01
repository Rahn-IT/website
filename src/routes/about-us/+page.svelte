<script>
	import Service from '$lib/Service.svelte';
	import Address from '$lib/info/Address.svelte';
</script>

<svelte:head>
	<title>Über uns</title>
	<meta name="description" content="Erfahren Sie mehr über unser Unternehmen." />
</svelte:head>

<div>
	<h1>Geschichte</h1>
	<p><nobr>Rahn IT-Systemtechnik</nobr>wurde 2004 von Heinz Rahn gegründet.</p>
</div>

<h1 class="text-3xl">Prinzipien</h1>
<div>
	<Service title="Verantwortungsvoller Cloud-Umgang" image="/images/services/Cloud.jpg">
		<p class="p-2">
			Oft hört man Sätze wie "Die Cloud ist die Zukunft" oder "". Aber was ist denn eigentlich "die
			Cloud"?
		</p>
		<p class="p-2">
			"Die Cloud" ist nichts anderes, als eine Gruppe an Computern, welche nicht Ihnen gehören.
			Meist stehen die entsprechenden Geräte in einem Rechenzentrum.
		</p>
		<p class="p-2">
			Sie haben dadurch natürlich den Vorteil, dass Sie sich um nichts kümmern müssen. Die
			technischen Details werden Ihnen von vorne herein abgenommen und versteckt. Dank gutem
			Marketing wird der Begriff "Cloud" gerne mit Sicherheit verbunden.
		</p>
		<h3 class="font-bold">Sicherheitsrisiken</h3>
		<p class="p-2">
			Doch "Cloud" bedeutet nicht automatisch sicher und zuverlässig. Cloud-Dienste sind ein
			beliebtes Angriffsziel für Cyberkriminelle und Ihre Daten sind dort oftmals nicht
			verschlüsselt. Sowohl der Betreiber, als auch erfolgreiche Angreifer können also Zugriff auf
			Ihre Daten bekommen.
		</p>
		<p class="p-2">
			Ein Beispiel hierfür ist der Diebstahl eines kryptographischen Signing-Schlüssels von
			Microsoft. Bei dem genannten Vorfall erlangte ein chinesischer Akteur einen vollumfassenden
			Zugriff die Daten von Microsofts Cloud-Kunden.
		</p>

		<p class="p-2">
			<a
				class="link"
				href="https://www.heise.de/news/Gestohlener-Cloud-Master-Key-Microsoft-schweigt-so-fragen-Sie-selber-9229395.html"
			>
				Gestohlener Cloud-Master-Key: Microsoft schweigt – so fragen Sie selbst
			</a>
			<br />
			<a
				class="link"
				href="https://www.heise.de/news/Neue-Erkenntnisse-Microsofts-Cloud-Luecken-viel-groesser-als-angenommen-9224640.html"
			>
				Microsofts gestohlener Schlüssel mächtiger als vermutet
			</a>
		</p>
		<h3 class="font-bold">Sollten wir also auf Cloud verzichten?</h3>
		<p class="p-2">
			So schwarz-weiß ist es natürlich nicht. Einige Cloud-Dienste bieten tolle Vorteile.<br />
			Selbst wir, als scheinbar große Kritiker, greifen auf Cloud-Dienste zurück und betreiben sogar
			eigene Cloud-basierte Angebote.
		</p>
		<p class="p-2">
			Es ist wichtig die Vor- und Nachteile in jedem Fall sorgfältig abzuwägen anstatt blindlings
			auf das Eine oder das Andere zu setzen.
		</p>
	</Service>

	<Service title="Pragmatische Lösungsansätze" image="/images/services/Cloud.jpg">
		<p class="p-2">
			In der IT führen oftmals viele Wege zum Ziel. Selten gibt es "die Eine Lösung".
		</p>

		<p class="p-2">
			Unsere Ansätze und Lösungen richten sich nach den Bedürfnissen unserer Kunden. Dabei bemühen
			wir uns um eine gesunde Balance aus erprobten Techniken und modernen Standards. Von uns hören
			sie kein "Das haben wir schon immer so gemacht" und neue Lösungen werden von uns nur dann
			angeboten, wenn sie wirklich wert sind.
		</p>

		<p class="p-2">
			Sollte keine unserer etablierten Lösungen passen, dann finden wir eine Neue.<br />
			Denn IT soll funktionieren und Spaß machen.
		</p>
	</Service>

	<Service title="Pragmatische Lösungsansätze" image="/images/services/Cloud.jpg"></Service>

	<h2>Open-Source</h2>
</div>
