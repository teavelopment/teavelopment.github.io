<script>
	import Logo from '$lib/sections/header/Logo.svelte';
	import HorizontalLine from '../line/horizontalLine.svelte';
	import { t } from '$lib/translations';
	import InternalLinks from '$lib/constants/internallinks';

	const closeDrawer = () => {
		document.getElementById('my-drawer')?.click();
	};
</script>

<div class="drawer-side">
	<label for="my-drawer" class="drawer-overlay" />
	<ul class="menu overflow-y-auto w-80 bg-base-100 text-base-content">
		<div class="py-2 px-4">
			<Logo onClickDrawer />
		</div>

		<HorizontalLine />
		<li>
			<a href={InternalLinks.apps} on:click={closeDrawer}>{$t('main.apps')}</a>
			<!-- <ul class="bg-primary">
				<li>
					<a href={InternalLinks.countDoko} on:click={closeDrawer}>{$t('apps.countDoko.title')}</a>
				</li>
			</ul> -->
		</li>
		<li>
			<a href={InternalLinks.openSource} on:click={closeDrawer}>{$t('main.openSource')}</a>
		</li>
		<li><a href={InternalLinks.faqs} on:click={closeDrawer}>{$t('main.faqs')}</a></li>
	</ul>
</div>
