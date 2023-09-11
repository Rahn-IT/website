<script lang="ts">
	import Company from './Company.svelte';

	import Fischer from '$lib/images/refs/fischer.png';
	import Autowelt from '$lib/images/refs/autowelt.jpg';
	import Mayer from '$lib/images/refs/mayer.jpg';
	import Danzl from '$lib/images/refs/danzl.jpg';
	import Langlechner from '$lib/images/refs/langlechner.png';
	import Fitworld from '$lib/images/refs/fitworld.png';
	import Heiss from '$lib/images/refs/heiss.png';
	import Biostein from '$lib/images/refs/biostein.png';
	import Mauerberger from '$lib/images/refs/mauerberger.png';
	import SolarbauChiemgau from '$lib/images/refs/solarbau-chiemgau.png';
	import Zimmermann from '$lib/images/refs/zimmermann.png';
	import IconLeft from './images/IconLeft.svelte';
	import IconRight from './images/IconRight.svelte';

	let container: HTMLDivElement | undefined;

	function findMiddleElement(): Element | null {
		if (container === undefined) return null;
		let middleOffset = Number.MAX_VALUE;
		let middleElement = null;
		for (let i = 0; i < container.children.length; i++) {
			const newOffset = Math.abs(
				container.children[i].offsetLeft +
					0.5 * container.children[i].clientWidth -
					container.scrollLeft -
					container.clientWidth * 0.5
			);
			if (newOffset < middleOffset) {
				middleOffset = newOffset;
				middleElement = container.children[i];
			} else {
				return middleElement;
			}
		}

		return middleElement;
	}

	function scroll(direction: 'left' | 'right') {
		if (container === undefined) return;
		const el = findMiddleElement();
		if (el === null) return;

		let nextElement: Element | null;
		if (direction === 'left') {
			nextElement = el.previousElementSibling;
		} else {
			nextElement = el.nextElementSibling;
		}

		if (nextElement !== null) {
			const newScroll =
				nextElement.offsetLeft + nextElement.clientWidth * 0.5 - container.clientWidth * 0.5;
			container.scrollTo({
				left: newScroll,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="relative h-40">
	<button
		class="absolute left-0 z-10 h-full w-16 cursor-pointer hover:backdrop-brightness-90"
		on:click={() => scroll('left')}><IconLeft /></button
	>
	<button
		class="absolute right-0 z-10 h-full w-16 cursor-pointer hover:backdrop-brightness-90"
		on:click={() => scroll('right')}><IconRight /></button
	>
	<div
		bind:this={container}
		class="no-scrollbar absolute flex h-full w-full snap-x snap-mandatory flex-row flex-nowrap gap-16 overflow-x-scroll px-96"
	>
		<Company
			class="bg-neutral p-10"
			name="Fischer"
			href="https://spenglerei-fischer.de"
			image={Fischer}
		/>
		<Company name="Autowelt Ostermaier" href="https://autowelt-ostermaier.de" image={Autowelt} />
		<Company name="Erbenermittlung Mayer" href="https://erben-mayer.de/" image={Mayer} />
		<Company name="Danzl Gartentechnik" href="https://www.danzl-gartentechnik.de/" image={Danzl} />
		<Company
			name="Langlechner"
			class="bg-neutral-50 px-8"
			href="https://langlechner-haustechnik.de/"
			image={Langlechner}
		/>
		<Company
			class="bg-neutral p-8"
			name="Fitworld"
			href="https://www.fitworldts.de/"
			image={Fitworld}
		/>
		<Company name="Rechtsanwälte Heiß" href="https://www.rechtsanwaelte-heiss.de/" image={Heiss} />
		<Company class="p-8" name="Biostein" href="https://www.biostein.com/" image={Biostein} />
		<Company
			name="Mauerberger"
			class="bg-neutral-100 px-8"
			href="https://www.mauerberger-tore.de/"
			image={Mauerberger}
		/>
		<Company
			class="p-8"
			name="Solarbau Chiemgau"
			href="https://solarbau-chiemgau.de/"
			image={SolarbauChiemgau}
		/>
		<Company
			class="bg-neutral p-8"
			name="Zimmermann Transporte"
			href="https://www.zimmermann-transporte.com/"
			image={Zimmermann}
		/>
	</div>
</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
