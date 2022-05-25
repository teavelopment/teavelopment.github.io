<script lang="ts">
	import { t } from '$lib/translations';
	import Collapse from '$lib/components/collapse/collapse.svelte';
	import type { App } from 'src/types/app';
	import SourcesLinks from '$lib/constants/sourceslinks';

	export let apps: [App];
</script>

<svelte:head>
	<title>{$t('main.faqs')} | Teavelopment</title>
	<meta name="description" content="Support" />
</svelte:head>

<h2 class="text-4xl">{$t('main.faqs')}</h2>

<div class="flex flex-col gap-y-2">
	{#each apps as app}
		<h3 class="text-3xl py-4">{app.title}</h3>
		<div id="grid">
			{#each app.faqs as faq}
				<div>
					<Collapse title={faq.title}>
						<p>{faq.body}</p>
					</Collapse>
				</div>
			{/each}
		</div>
	{/each}
</div>

<div class="flex flex-row justify-end pt-16">
	<img class="h-72" src={SourcesLinks.illustrationFaq} alt="FAQ Illustration" />
</div>

<style>
	#grid {
		/**
   * User input values.
   */
		--grid-layout-gap: 10px;
		--grid-column-count: 4;
		--grid-item--min-width: 400px;

		/**
   * Calculated values.
   */
		--gap-count: calc(var(--grid-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
		);
		grid-gap: var(--grid-layout-gap);
	}
</style>
