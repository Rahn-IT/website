<script>
	import Service from '$lib/Service.svelte';
	import Gears from '$lib/images/services/Gears.jpg';
	import Transparenz from '$lib/images/services/Transparenz2.jpg';
	import Cloud from '$lib/images/services/Cloud.jpg';
</script>

<svelte:head>
	<title>Unsere Prinzipen</title>
	<meta name="description" content="Erfahren Sie, was uns antreibt." />
</svelte:head>

<h1 class="pt-14 text-3xl">Unsere Prinzipien</h1>
<div class="py-10">
	<Service title="Pragmatische Arbeitsweise" image={Gears}>
		<p class="p-2">
			In der IT führen oftmals viele Wege zum Ziel. Selten gibt es "die Eine Lösung".
		</p>

		<p class="p-2">
			Unsere Ansätze und Lösungen richten sich nach den Bedürfnissen unserer Kunden. Dabei bemühen
			wir uns um eine gesunde Balance aus erprobten Techniken und modernen Standards. Von uns hören
			sie kein "Das haben wir schon immer so gemacht" und neue Lösungen werden von uns nur dann
			angeboten, wenn sie es wirklich wert sind.
		</p>

		<p class="p-2">
			Sollte keine unserer etablierten Lösungen passen, finden wir eine Neue.<br />
			Denn IT soll funktionieren und Spaß machen.
		</p>
	</Service>

	<Service title="Ehrlichkeit und Transparenz" image={Transparenz}>
		<p class="p-2">
			Eine erfolgreiche Zusammenarbeit braucht Vertrauen.<br />
			Aus diesem Grund setzen wir bei unserer Arbeit auf Ehrlichkeit und Offenheit.<br />
			Das selbe erwarten wir von unseren Kunden, denn nur so können wir uns verbessern.
		</p>
		<p class="p-2">
			Wir kennen nicht nur die Vorteile, sondern auch die Nachteile unserer Lösungen.<br />
			Auch unsere Kunden haben ein Recht zu wissen, wo die Schwachstellen Ihrer IT liegen.<br />
			Denn nur so ist eine informierte Entscheidung möglich.
		</p>
		<p class="p-2">
			Der Erfolg unserer Kunden ist auch unser Erfolg.<br />
			Wenn es um die Sicherheit und den Fortbestand Ihres Unternehmens geht, nehmen wir kein Blatt vor
			den Mund.
		</p>
	</Service>

	<Service title="Verantwortungsvoller Cloud-Umgang" image={Cloud} loading="eager">
		<p class="p-2">
			Große Firmen wie Microsoft oder Google werben gerne mit Sätzen wie "Die Cloud ist die Zukunft"
			oder "Ihre Daten sind in der Cloud sicher, geschützt und immer zugänglich". Aber was ist denn
			eigentlich "die Cloud"?
		</p>
		<p class="p-2">
			"Die Cloud" ist nichts anderes, als eine Gruppe an Computern, welche nicht Ihnen gehören.
			<br />
			Meist stehen die entsprechenden Geräte in einem Rechenzentrum.
		</p>
		<p class="p-2">
			Für Sie bringt das den Vorteil, dass Sie sich um nichts kümmern müssen. Die technischen
			Details werden Ihnen abgenommen und versteckt. Dank gutem Marketing wird der Begriff "Cloud"
			gerne mit Sicherheit verbunden.
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
			Microsoft. Bei dem genannten Vorfall erlangte eine Hackergruppe einen vollumfassenden Zugriff
			auf die Daten von Microsofts Cloud-Kunden.
		</p>

		<div class="p-2">
			<div>
				<a
					class="link"
					href="https://www.heise.de/news/Gestohlener-Cloud-Master-Key-Microsoft-schweigt-so-fragen-Sie-selber-9229395.html"
				>
					Gestohlener Cloud-Master-Key: Microsoft schweigt – so fragen Sie selbst
				</a>
			</div>
			<div>
				<a
					class="link"
					href="https://www.heise.de/news/Neue-Erkenntnisse-Microsofts-Cloud-Luecken-viel-groesser-als-angenommen-9224640.html"
				>
					Microsofts gestohlener Schlüssel mächtiger als vermutet
				</a>
			</div>
		</div>
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
</div>
