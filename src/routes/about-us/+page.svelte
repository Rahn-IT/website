<script>
	import Person from '$lib/Person.svelte';
</script>

<svelte:head>
	<title>Über uns</title>
	<meta name="description" content="Lernen Sie unser Personal kennen." />
</svelte:head>

<div class="grid grid-cols-1">
	<div class="p-10">
		<Person
			name="Heinz Rahn"
			caption="Windows-Administrator, IT-Fachmann seit 1983"
			image="/images/people/heinz.jpg"
		>
			<p class="py-2">.</p>
		</Person>
	</div>

	<div class="p-10">
		<Person
			name="Luca Wlcek"
			caption="Linux-Administrator, Webentwickler"
			image="/images/people/luca.jpg"
		>
			<p class="py-2">Mit Heinz als Vater bin ich von klein auf mit Computern groß geworden.</p>
			<p class="py-2">Als ich 7 Jahre alt war bekam ich meinen ersten eigenen Computer.</p>
			<p class="py-2">
				In meiner Jugend kam mein Interesse für Programmiernug und die Funktionsweise moderner
				Computer auf. Ich beschäftigte mich mit der logischen Schaltkreisen und simpler
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
