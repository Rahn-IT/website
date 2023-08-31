<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import LogoFull from '$lib/images/logo-full.svelte';
	import MenuIcon from '$lib/images/MenuIcon.svelte';

	let menuOpen = false;

	onNavigate(async () => {
		menuOpen = false;
	});
</script>

<nav class="navbar h-20 shadow">
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
			<input id="my-drawer-4" bind:value={menuOpen} type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label for="my-drawer-4" class="btn btn-ghost drawer-button">
					<MenuIcon class="h-full w-auto" />
				</label>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-4" class="drawer-overlay"></label>
				<ul class="menu menu-lg min-h-full w-80 bg-base-200 p-4 text-base-content">
					<slot />
				</ul>
			</div>
		</div>
	</div>
</nav>
