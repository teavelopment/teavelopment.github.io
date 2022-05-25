<script>
	import SourcesLinks from '$lib/constants/sourceslinks';

	export let url = '';
	import { locale } from '$lib/translations';
	let l = locale.get();

	let getPath = () => (l === 'de' ? SourcesLinks.appleStore_bk_de : SourcesLinks.appleStore_bk_en);
</script>

{#if url}
	<a href={url}>
		<img class="h-10" src={getPath()} alt="Apple Store" />
	</a>
{/if}
