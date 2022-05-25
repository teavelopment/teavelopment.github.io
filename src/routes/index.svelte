<script context="module" lang="ts">
	import Apps from '$lib/sections/apps/apps.svelte';
	import Landing from '$lib/sections/landing/landing.svelte';
	import OpenSource from '$lib/sections/openSource/openSource.svelte';
</script>

<svelte:head>
	<title>Teavelopment</title>
	<meta name="description" content="Home" />
</svelte:head>

<Landing />
<Apps />
<OpenSource />
