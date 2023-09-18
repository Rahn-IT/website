<script>
	import Person from '$lib/Person.svelte';
	import Heinz from '$lib/images/people/heinz.jpg';
	import Luca from '$lib/images/people/luca.jpg';
</script>

<svelte:head>
	<title>Unser Team</title>
	<meta name="description" content="Lernen Sie unser Team kennen." />
</svelte:head>

<div class="grid w-full grid-cols-1">
	<div class="py-10">
		<Person name="Heinz Rahn" caption="Windows-Administrator, IT-Fachmann seit 1983" image={Heinz}>
			<p class="py-2">
				Mein erster Computer war der Sinclair ZX81, ein 8-Bit Computer, den ich damals noch per Hand
				lötete.
			</p>
			<p class="py-2">
				Während meiner Laufbahn bekam ich den Einzug des Computers in alle Lebensbereiche hautnah
				mit. Vom Commodore 64 über PCs mit OS/2 bis hin zum Einzug von Windows. Nachdem immer mehr
				Freunde und Bekannte mit ihren Anliegen zu mir kamen, beschloss ich schließlich mein Hobby
				zum Beruf zu machen.
			</p>
			<p class="py-2">
				Bis in in die 2000er Jahre arbeitete ich bei Gemeinden, Systemhäusern und war Mitglied
				einiger Interessengemeinschaften.
			</p>
			<p class="py-2">
				2004 machte ich mich schließlich selbstständig und eröffnete <nobr
					>Rahn IT-Systemtechnik.</nobr
				>
			</p>
		</Person>
	</div>

	<div class="py-10">
		<Person name="Luca Wlcek" caption="Linux-Administrator, Webentwickler" image={Luca}>
			<p class="py-2">Mit Heinz als Vater bin ich von klein auf mit Computern groß geworden.</p>
			<p class="py-2">Als ich 7 Jahre alt war bekam ich meinen ersten eigenen Computer.</p>
			<p class="py-2">
				In meiner Jugend kam mein Interesse für Programmierung und die Funktionsweise moderner
				Computer auf. Ich beschäftigte mich mit logischen Schaltkreisen und simpler
				Rechnerarchitektur.
			</p>
			<p class="py-2">
				Während meiner Ausbildung entdeckte ich Linux und die Open-Source Welt. Inzwischen bin ich
				langjähriger <nobr>Linux-Nutzer</nobr> und kümmere mich im Betrieb um die
				<nobr>Linux-Infrastruktur.</nobr>
			</p>
		</Person>
	</div>
</div>
