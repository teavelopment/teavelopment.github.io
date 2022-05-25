<script context="module" lang="ts">
	import { t, locale, locales, loadTranslations } from '$lib/translations';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }: { url: URL }) => {
		const { pathname } = url;

		const defaultLocale = 'en'; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	};
</script>

<script lang="ts">
	import DrawerSide from '$lib/components/drawer/drawerSide.svelte';
	import Footer from '$lib/sections/footer/Footer.svelte';
	import Header from '$lib/sections/header/Header.svelte';
	import '../app.css';
	import '../fonts.css';
</script>

<div class="flex flex-col h-screen">
	<div class="drawer drawer-end">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<Header />

			<main class="flex-grow">
				<slot />
			</main>

			<Footer />
		</div>
		<DrawerSide />
	</div>
</div>
