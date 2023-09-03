<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import LogoFull from '$lib/images/logo-full.svelte';
	import MenuIcon from '$lib/images/MenuIcon.svelte';

	let menuOpen = false;

	let navBar: HTMLElement | undefined;

	onNavigate(async () => {
		menuOpen = false;
		closeSubMenus();
	});

	function closeSubMenus(event?: Event) {
		if (navBar !== undefined) {
			const target = event?.target;
			const details = target instanceof HTMLElement ? target.closest('details') : null;
			navBar.querySelectorAll('details').forEach((d: HTMLDetailsElement) => {
				if (details !== d) {
					d.open = false;
				}
			});
		}
	}
</script>

<svelte:document on:mouseup={closeSubMenus} />

<nav bind:this={navBar} class=" navbar h-20 shadow dark:bg-base-200">
	<div class="navbar-start h-full">
		<a class="btn btn-ghost h-full" href="/">
			<LogoFull class="h-full" />
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal menu-lg p-0">
			<slot />
		</ul>
	</div>
	<div class="navbar-end lg:invisible">
		<div class="drawer drawer-end z-50 w-auto">
			<input id="mobile-menu" bind:checked={menuOpen} type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label for="mobile-menu" class="btn btn-ghost drawer-button">
					<MenuIcon class="h-full w-auto" />
				</label>
			</div>
			<div class="drawer-side">
				<label for="mobile-menu" class="drawer-overlay"></label>
				<ul class="menu menu-lg min-h-full w-80 bg-base-200 p-4 text-base-content">
					<slot />
				</ul>
			</div>
		</div>
	</div>
</nav>
