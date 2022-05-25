<script lang="ts">
	import ExternalLinks from '$lib/constants/externallinks';
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('main.privacyPolicy')} | Teavelopment</title>
	<meta name="description" content="Privacy Policy" />
</svelte:head>

<section id="privacyPolicy" class="p-10 maxWidth">
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl">{$t('main.privacyPolicy')}</h2>
		<p>{$t('main.dataIsBeeingCollected')}</p>
		<h3 class="text-xl">
			{$t('main.dataProcessedForPurpose')}:
		</h3>
		<h4 class="text-lg">{$t('main.hostingAndInfrastructure')}</h4>
		<p>
			<span class="font-bold">Github Pages</span>
			<br />
			{$t('main.dataByService')}<br />
		</p>
		<h3 class="text-xl">{$t('main.contact')}</h3>
		<p>
			Teavelopment<br />
			Julian Rörig<br />
			Nobelstraße 9<br />
			49088 Osnabrück<br />
			{$t('main.germany')} <br />

			{$t('main.email')}:
			<a class="link link-hover" href={ExternalLinks.email}>contact@teavelopment.com</a>
		</p>
	</div>
</section>
