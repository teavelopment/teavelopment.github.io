<script>
	import AppCard from '$lib/components/appCard/appCard.svelte';
	import ExternalLinks from '$lib/constants/externallinks';
	import InternalLinks from '$lib/constants/internallinks';
	import SourcesLinks from '$lib/constants/sourceslinks';
	import { t } from '$lib/translations';
</script>

<section id="apps" class="px-10 pt-10 maxWidth">
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl">{$t('apps.finelyCraftedApps')}</h2>
		<AppCard
			title={$t('apps.countDoko.title')}
			logoPath={SourcesLinks.logoCountDoko}
			description={$t('apps.countDoko.description')}
			topLink={InternalLinks.countDoko}
			playStoreUrl={ExternalLinks.playStoreCountDoko}
		/>
		<AppCard
			title={$t('apps.vaccinationBot.title')}
			logoPath={SourcesLinks.logoVaccinationBot}
			description={$t('apps.vaccinationBot.description')}
			topLink={ExternalLinks.githubVaccinationBot}
		/>
	</div>
	<div class="flex flex-row justify-end pt-16">
		<img class="h-72" src={SourcesLinks.illustrationMobileApp} alt="Phone Illustration" />
	</div>
</section>
