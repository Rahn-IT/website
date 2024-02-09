<script>
	import Service from '$lib/Service.svelte';

	import Email from '$lib/images/services/email.png';
	import Dmarc from '$lib/images/services/dmarc.jpg';
</script>

<svelte:head>
	<title>E-Mail</title>
	<meta
		name="description"
		content="Hier finden Sie alle Informationen rund um unsere E-Mail-Dienste."
	/>
</svelte:head>

<div class="py-8">
	<h1 class="py-8 text-center text-4xl">Unsere E-Mail Dienste</h1>
	<p class="py-2 text-xl">
		E-Mail ist und bleibt der entscheidende Nachrichtenkanal für geschäftliche Kommunikation.
	</p>
	<p class="text-xl">Mit unserer Hilfe kommen Ihre E-Mails zuverlässig an.</p>

	<p class="py-2"></p>

	<Service title="Rahn-IT Mail-Gateway" image={Email}>
		<p class="py-2">Unser E-Mail-Gateway ist die perfekte Ergänzung für Ihren Mailserver.</p>

		<h3 class="font-bold pt-4">Spam-Filter und Virenscanner</h3>
		<p>
			Eingehende Mails werden von unserem Leistungsstarken Spam-Filter unter die Lupe genommen.
			<br />
			Dieser sortiert nicht nur große Mengen an ungewoller Werbung aus, sondern schützt auch vor Viren
			und Betrugsversuchen.
		</p>

		<h3 class="font-bold pt-4">E-Mails wie aus dem Lehrbuch</h3>
		<p>
			Unser System sorgt dafür, dass Ihre E-Mails den neuesten Standarts entsprechen.
			<br />
			Jede E-Mail wird mittels dem DKIM-Verfahren digital signiert und entspricht den nötigen SPF- und
			DMARC-Vorgaben.
		</p>
		<p>So könne Sie sichergehen, dass Ihre E-Mails nie wieder grundlos im Spam-Ordner landen.</p>

		<h3 class="font-bold pt-4">Immer einen Schrit voraus</h3>
		<p>Dank fortlaufender Überwachung geht keine E-Mail mehr spurlos verloren.</p>
		<p>
			Wir behalten ein wachsames Auge auf Ihren Mailverkehr, passen den Spam-Filter laufend an und
			schalten uns bei auffallenden Problemen selbstständig ein.
		</p>
	</Service>

	<Service title="DMARC-Überwachung" image={Dmarc}>
		<p class="py-2">
			Haben Sie kein Interesse an unserem Gateway, aber Ihre E-Mails landen trotzdem im Spam-Ordner?
		</p>
		<p class="py-2">
			Mithilfe von DMARC-Berichten können Sie nicht nur feststellen, ob Ihre E-Mails auch ankommen,
			<br />
			sondern kommen auch Betrügern, die unter Ihrem Namen handeln schnell auf die Schliche.
		</p>
		<p class="py-2">
			Wir übernehmen für Sie die Einrichtung und Auswertung eingehender DMARC-Berichte.
			<br />
			Dadurch sind Sie stets informiert, sollte etwas an Ihrem Mail-System nicht stimmen.
		</p>
	</Service>

	<h2 class="pt-8 text-3xl">Geht das auch auf Deutsch?</h2>
	<p class="pt-2">
		Wer nicht gerade inen Mail-Server betreibt mag sich wundern, was denn die ganzen Abkürzungen
		bedeuten sollen.
	</p>
	<p class="pb-2">
		Damit Sie nicht im Dunkeln tappen, haben wir hier ein paar kleine Erklärungen vorbereitet.
	</p>

	<div class="p-4">
		<h3 class="text-2xl font-bold">SMTP - Einfaches Post-Transport-Protokoll</h3>
		<p class="py-2">
			SMTP ist ein altes Protokoll. Die erste Version wurde 1982 veröffentlicht und ist damit etwas
			so alt wie das Internet.
		</p>
		<p>Damals lößte SMTP das ältere MTP ab, welches noch zu Zeiten des Arpanet entwickelt wurde.</p>
		<p class="py-2">
			Damals dachte allerdings noch niemand an die heutige Flut an Hackern und bösartigen
			Internetnutzern.
		</p>
		<p class="py-2">
			Es wurde also übersehen einen wirksamen Schutz gegen gefälschte E-Mails zu spezifizieren.
			<br />
			SMTP erlaubt es E-Mails unter einer beliebigen Adresse E-Mails zu verschicken.
			<br />
			Genauso können Sie einen beliebigen Absender af Ihren Brief schreiben und diesen einwerfen.
			<br />
			Und wie im Nachhinein bekannt, tauchten die erstem E-Mails mit gefälschten Absendern auf. Das konnte
			natürlich nicht so bleiben.
		</p>
	</div>

	<div class="p-4">
		<h3 class="text-2xl font-bold">SPF - Protokoll zur Absender-Prüfung</h3>
		<p class="py-2">
			2006 wurde aus diesem Grund SPF spezifiziert.
			<br />
			SPF ist eine simple, aber effektive Maßnahme um gefälschten E-Mails zu vermeiden.
			<br />
			Als Besitzer einer Internet-Dömäne können Sie angeben, welche Server berechtigt sind unter Ihrem
			Namen E-Mails zu versenden.
			<br />
			Wenn die Mails ankommen wird lediglich geprüft, ob der Absender von Ihnen berechtigt wurde, Ihre
			E-Mails zuzustellen.
		</p>
		<p>Sie kennen das Prinzip zum Beispiel schon von der Bank -</p>
	</div>
	<div class="p-4">
		<h3 class="text-2xl font-bold">DKIM - Von der Domäne Signierte E-Mails</h3>
		<p class="py-2">
			SPF ist ein wichtiger Schritt, aber leider nicht immer effektiv oder Sinnvoll.
			<br />
			Mit DKIM werden ausgehende E-Mails digital signiert. Eine solche Signatur kann praktisch nicht
			gefälscht werden.
			<br />
			So kann verhindert werden, dass jemand unserem eigentlich vertrauenswürdigen Briefträger einen
			gefälschten Brief unterjubelt.
			<br />
			Auch wenn SPF nicht genutzt werden kann, ist DKIM eine hilfreiche Maßnahme.
		</p>
	</div>
	<div class="p-4">
		<h3 class="text-2xl font-bold">DMARC - Berichterstattung und Konformität</h3>
		<p class="py-2"></p>
	</div>
</div>
