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

		<h3 class="pt-4 font-bold">Spam-Filter und Virenscanner</h3>
		<p>
			Eingehende Mails werden von unserem Leistungsstarken Spam-Filter unter die Lupe genommen.
			<br />
			Dieser sortiert nicht nur große Mengen an ungewoller Werbung aus, sondern schützt auch vor Viren
			und Betrugsversuchen.
		</p>

		<h3 class="pt-4 font-bold">E-Mails wie aus dem Lehrbuch</h3>
		<p>
			Unser System sorgt dafür, dass Ihre E-Mails den neuesten Standarts entsprechen.
			<br />
			Jede E-Mail wird mittels dem DKIM-Verfahren digital signiert und entspricht den nötigen SPF- und
			DMARC-Vorgaben.
		</p>
		<p>So könne Sie sichergehen, dass Ihre E-Mails nie wieder grundlos im Spam-Ordner landen.</p>

		<h3 class="pt-4 font-bold">Immer einen Schrit voraus</h3>
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
		Wer nicht gerade einen Mail-Server betreibt mag sich wundern, was denn die ganzen Abkürzungen
		bedeuten sollen.
	</p>
	<p class="pb-2">
		Damit Sie nicht im Dunkeln tappen, haben wir die ausgeschriebene Abkürzungen noch einmal
		Sinngemäß übersetzt.
	</p>

	<div class="p-4">
		<h3 class="text-2xl font-bold">SMTP - Einfaches Post-Transport-Protokoll</h3>
		<p class="py-2">
			Wie der Name bereits ahnen lässt, wird dieses Protokoll verwendet um E-Mails zu versenden.
			<br />
			Und das ist auch schon alles was SMTP kann - dadurch bleibt es erstaunlich simpel.
		</p>
		<p class="py-2">
			SMTP ist ein altes Protokoll. Die erste Version wurde 1982 veröffentlicht und ist damit etwas
			so alt wie das Internet.
		</p>
		<p class="py-2">
			Damals blickte man voller Zuversicht und Enthusiasmus in die Zukunft.
			<br />
			Niemand kam auf die Idee sich anzumaßen, einen falschen Absender anzugeben.
		</p>
		<p class="py-2">
			SMTP bietet von sich aus also keine Möglichkeit zu prüfen, ob der Absender denn korrekt ist.
			<br />
			Genauso können Sie einen beliebigen Absender auf einen Brief schreiben und diesen einwerfen.
		</p>
		<p class="py-2"></p>
	</div>

	<div class="p-4">
		<h3 class="text-2xl font-bold">SPF - Rahnmenwerk zur Absender-Prüfung</h3>
		<p class="py-2">Um gegen gefälschte Absender vorzugehen wurde 2006 SPF spezifiziert.</p>
		<p class="py-2">
			SPF ist eine simple, aber effektive Maßnahme um gefälschten E-Mails zu vermeiden.
			<br />
			Als Besitzer einer Internet-Dömäne können Sie angeben, welche Server berechtigt sind, unter Ihrem
			Namen E-Mails zu versenden.
		</p>
		<p class="py-2">
			Wenn Ihre E-Mails beim Empfänger ankommen, gleicht dieser den sendenden Server mit der von
			Ihnen veröffentlichten Liste ab.
		</p>
		<p>
			Sie kennen das Prinzip zum Beispiel schon von der Bank - dort geben Sie auch an, wer denn auf
			Ihr Konto zugreifen darf.
		</p>
	</div>
	<div class="p-4">
		<h3 class="text-2xl font-bold">DKIM - Von der Domäne Signierte E-Mails</h3>
		<p class="py-2">
			SPF ist ein wichtiger Schritt, kann aber nicht immer verwendet werden und ist zuweilen leicht
			zu überlisten.
		</p>
		<p class="py-2">
			Mit DKIM werden ausgehende E-Mails digital signiert. Eine solche Signatur kann praktisch nicht
			gefälscht werden.
			<br />
			So kann verhindert werden, dass jemand unserem eigentlich vertrauenswürdigen Briefträger einen
			gefälschten Brief unterjubelt.
		</p>
		<p class="py-2">Auch wenn SPF nicht genutzt werden kann, ist DKIM eine hilfreiche Maßnahme.</p>
	</div>
	<div class="p-4">
		<h3 class="text-2xl font-bold">DMARC - Berichterstattung und Konformität</h3>
		<p class="py-2">DMARC ist die letzte Stufe moderner E-Mail-Absicherung.</p>
		<p class="py-2">
			Zum Einen kann der Domänenbesitzer festlegen, was mit Nachrichten passiert, bei denen die
			Verifizierung teilweise oder Vollständig fehlgeschlagen ist.
		</p>
		<p class="py-2">
			Zum Anderen senden die Empfänger der E-Mails regelmäßige Berichte an den Besitzer der
			Absender-Domäne.
			<br />
			Dadurch kann schnell festgestellt werden, wenn konfigurationsfehler vorliegen.
			<br />
			Zusätzlich werden auch Mails gemeldet, die gefälscht wurden. Dadurch kann in einigen Fällen gegen
			die Fälscher vorgegangen werden.
		</p>
	</div>
</div>
