
<svelte:head>
	<title>Leistungen</title>
	<meta
		name="description"
		content="Mit uns kommen Ihre E-Mails zuverlässig und pünktlich an."
	/>
</svelte:head>

<div class="py-8">
	<h1 class="py-8 text-center text-4xl">E-Mails</h1>
    <p class="py-2">
        Hier finden Sie alle Informationen rund um E-Mail.
    </p>

    <h2 class="pt-8 text-2xl">Warum das Ganze?</h2>
    <p class="py-2">
        Wer nicht gerade inen Mail-Server betreibt mag sich wundern, was denn der ganze Aufwand soll.
        Auch wenn wir für unsere Kunden alle nötigen Einstellungen verwalten, so sollte niemand im dunkeln bleiben.
    </p>
    
    <h3 class="text-xl font-bold">SMTP - Einfaches Protokoll für Mailtransport</h3>
    <p class="py-2">
        SMTP ist ein altes Protokoll. Die erste Version wurde 1989 veröffentlicht.
    </p>
    <p class="py-2">
        Damals dachte allerdings noch niemand an die heutige Flut an Hackern und bösartigen Internetnutzern.
    </p>
    <p class="py-2">
        Es wurde also übersehen einen wirksamen Schutz gegen gefälschte E-Mails zu spezifizieren.
        <br>
        SMTP erlaubt es E-Mails unter einer beliebigen Adresse E-Mails zu verschicken.
        <br>
        Genauso können Sie einen beliebigen Absender af Ihren Brief schreiben und diesen einwerfen.
        <br>
        Und wie im Nachhinein bekannt, tauchten die erstem E-Mails mit gefälschten Absendern auf. Das konnte natürlich nicht so bleiben.
    </p>

    <h3 class="text-xl font-bold">SPF - Protokoll zur Absender-Prüfung</h3>
    <p class="py-2">
        2006 wurde aus diesem Grund SPF spezifiziert.
        <br>
        SPF ist eine simple aber effektive Maßnahme um gefälschten E-Mails zu vermeiden.
        <br>
        Als besitzer einer Internet-Dömäne können Sie angeben, welche Server berechtigt sind unter Ihrem Namen E-Mails zu versenden.
        <br>
        Wenn die Mails ankommen, wird lediglich geprüft, ob der Absender von Ihnen berechtigt wurde, Ihre E-Mails zuzustellen.
        
    </p>

    <h3 class="text-xl font-bold">DKIM - Von der Domäne Signierte E-Mails</h3>
    <p class="py-2">
        SPF ist ein wichtiger Schritt, aber leider nicht immer effektiv oder Sinnvoll.
        <br>
        Mit DKIM werden ausgehende E-Mails digital signiert. Eine solche Signatur kann praktisch nicht gefälscht werden.
        <br>
        So kann verhindert werden, dass jemand unserem eigentlich vertrauenswürdigen Briefträger einen gefälschten Brief unterjubelt.
        <br>
        Auch wenn SPF nicht genutzt werden kann, ist DKIM eine hilfreiche Maßnahme.
    </p>

    <h3 class="text-xl font-bold">DMARC - Berichterstattung und Konformität</h3>
    <p class="py-2">

    </p>
</div>