<script lang="ts">
	import AppleStore from '$lib/components/labels/appleStore.svelte';

	import PlayStore from '$lib/components/labels/playStore.svelte';

	export let topLink = '';
	export let title = '';
	export let logoPath = '';
	export let frameworkLogoPath = '';
	export let description = '';
	export let playStoreUrl = '';
	export let appleStoreUrl = '';
</script>

<a href={topLink}>
	<div
		class="link w-96 bg-base-content inline-flex flex-col rounded-xl p-6 border-4 border-primary"
	>
		<div class="flex flex-row">
			{#if logoPath}
				<img class="h-12" src={logoPath} alt="Logo" />
				<div class="w-4" />
			{/if}
			<h2 class="card-title text-primary font-bold">{title}</h2>

			<div class="flex-grow" />
			{#if frameworkLogoPath}
				<div class="w-4" />
				<img class="h-12" src={frameworkLogoPath} alt="Framework Logo" />
			{/if}
		</div>

		<div class="h-4" />
		<p class="text-black">{description}</p>
		{#if playStoreUrl || appleStoreUrl}
			<div class="h-4" />
			<div class="inline-flex flex-row justify-between">
				{#if playStoreUrl}
					<PlayStore url={playStoreUrl} />
				{/if}
				{#if appleStoreUrl}
					<AppleStore url={appleStoreUrl} />
				{/if}
			</div>
		{/if}
	</div>
</a>
