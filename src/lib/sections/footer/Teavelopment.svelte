<script>
	import AppleStore from '$lib/components/labels/appleStore.svelte';
	import PlayStore from '$lib/components/labels/playStore.svelte';
	import ExternalLinks from '$lib/constants/externallinks';
	import SourcesLinks from '$lib/constants/sourceslinks';
</script>

<div>
	<img
		class="object-scale-down max-w-xs shrink"
		src={SourcesLinks.logoTeavelopment}
		alt="Teavelopment Poster"
	/>
	<div class="w-full flex flex-row justify-center gap-x-4">
		<PlayStore url={ExternalLinks.playStoreTeavelopment} />
		<AppleStore url="" />
	</div>
</div>
