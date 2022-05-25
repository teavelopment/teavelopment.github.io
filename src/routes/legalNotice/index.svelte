<script>
	import ExternalLinks from '$lib/constants/externallinks';

	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t('main.legalNotice')} | Teavelopment</title>
	<meta name="description" content="Legal Notice" />
</svelte:head>

<section id="openSource" class="p-10 maxWidth">
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl">{$t('main.legalNotice')}</h2>
		<h3 class="text-xl">{$t('main.address')}</h3>
		<p>
			Teavelopment<br />
			Julian Rörig<br />
			Nobelstraße 9<br />
			49088 Osnabrück<br />
			{$t('main.germany')}
		</p>
		<h3 class="text-xl">{$t('main.contact')}</h3>
		<p>
			{$t('main.phone')}: <a class="link link-hover" href={ExternalLinks.phone}>+491754487995</a><br
			/>
			{$t('main.email')}:
			<a class="link link-hover" href={ExternalLinks.email}>contact@teavelopment.com</a>
		</p>
	</div>
</section>
