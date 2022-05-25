<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
	export const load = ({ error, status }: LoadEvent) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script lang="ts">
	import SourcesLinks from '$lib/constants/sourceslinks';

	export let error: Error | null;
	export let status: number | null;
</script>

<svelte:head>
	<title>Error | Teavelopment</title>
	<meta name="description" content="Error" />
</svelte:head>

<div class="flex flex-col justify-center items-center gap-8">
	<img class="max-h-96 px-8 pt-8" src={SourcesLinks.illustration404} alt="404" />
	<h1 class="px-8 pb-8 text-5xl">{status ?? ''} - {error?.message ?? ''}</h1>
</div>
