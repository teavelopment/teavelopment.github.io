<script lang="ts">
	export let horizontal = true;
	import { t } from '$lib/translations';
	import InternalLinks from '$lib/constants/internallinks';
</script>

<ul class="menu {horizontal ? 'menu-horizontal' : ''} p-0">
	<li>
		<a href={InternalLinks.apps}>{$t('main.apps')}</a>
		<!-- <ul class="bg-base-200">
			<li><a href={InternalLinks.countDoko}>{$t('apps.countDoko.title')}</a></li>
		</ul> -->
	</li>
	<li>
		<a href={InternalLinks.openSource}>{$t('main.openSource')}</a>
	</li>
	<li><a href={InternalLinks.faqs}>{$t('main.faqs')}</a></li>
</ul>
