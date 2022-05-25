<script lang="ts">
	import { page } from '$app/stores';
	import HorizontalLine from '$lib/components/line/horizontalLine.svelte';
	import DrawerButton from '../../components/drawer/drawerButton.svelte';
	import Logo from './Logo.svelte';
	import NavigationList from './NavigationList.svelte';
	export let horizontal = true;
</script>

<header class="navbar bg-base-100 z-10 maxWidth">
	<div class="flex-1">
		<Logo />
	</div>
	<div class="flex-none hidden lg:block">
		<NavigationList {horizontal} />
	</div>
	<div class="lg:hidden">
		<DrawerButton />
	</div>
</header>
<HorizontalLine />
