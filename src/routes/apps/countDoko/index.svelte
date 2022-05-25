<script context="module" lang="ts">
	import ExternalLinks from '$lib/constants/externallinks';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		return {
			status: 302,
			redirect: ExternalLinks.playStoreCountDoko
		};
	}
</script>
