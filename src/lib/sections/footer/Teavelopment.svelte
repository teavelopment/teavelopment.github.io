<script>
	import AppleStore from '$lib/components/labels/appleStore.svelte';
	import PlayStore from '$lib/components/labels/playStore.svelte';
	import ExternalLinks from '$lib/constants/externallinks';
	import InternalLinks from '$lib/constants/internallinks';
	import SourcesLinks from '$lib/constants/sourceslinks';
</script>

<div>
	<a href={InternalLinks.home}>
		<img
			class="object-scale-down max-w-xs shrink"
			src={SourcesLinks.logoTeavelopmentPoster}
			alt="Teavelopment Poster"
		/>
	</a>
	<div class="w-full flex flex-row justify-center gap-x-4">
		<PlayStore url={ExternalLinks.playStoreTeavelopment} />
		<AppleStore url="" />
	</div>
</div>
