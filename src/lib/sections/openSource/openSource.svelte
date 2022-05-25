<script>
	import AppCard from '$lib/components/appCard/appCard.svelte';
	import ExternalLinks from '$lib/constants/externallinks';
	import SourcesLinks from '$lib/constants/sourceslinks';
	import { t } from '$lib/translations';
</script>

<section id="openSource" class="px-10 pt-10 maxWidth">
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl">{$t('openSource.openSource')}</h2>

		<AppCard
			title={$t('openSource.simpleIcons.title')}
			logoPath={SourcesLinks.logoSimpleIcons}
			frameworkLogoPath={SourcesLinks.logoFlutter}
			description={$t('openSource.simpleIcons.description')}
			topLink={ExternalLinks.pubDevSimpleIcons}
		/>
		<AppCard
			title={$t('openSource.avataaars.title')}
			logoPath={SourcesLinks.logoAvataaars}
			frameworkLogoPath={SourcesLinks.logoFlutter}
			description={$t('openSource.avataaars.description')}
			topLink={ExternalLinks.pubDevAvataaars}
		/>
	</div>
	<div class="flex flex-row justify-end pt-16">
		<img class="h-72" src={SourcesLinks.illustrationFlutter} alt="Flutter Illustration" />
	</div>
</section>
