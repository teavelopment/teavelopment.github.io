<script>
	import InternalLinks from '$lib/constants/internallinks';
	import SourcesLinks from '$lib/constants/sourceslinks';

	export let onClickDrawer = false;

	const closeDrawer = () => {
		document.getElementById('my-drawer')?.click();
	};
</script>

<a href={InternalLinks.home} on:click={onClickDrawer ? closeDrawer : null}>
	<div class="flex flex-row flex-nowrap items-center gap-x-2.5">
		<img src={SourcesLinks.logoTeavelopmentLogo} width="50" height="50" alt="Logo" />

		<p id="teavelopmentText">Teavelopment</p>
	</div>
</a>

<style>
	#teavelopmentText {
		font-family: Berkshire Swash, Arial, Geneva, Helvetica, sans-serif;
		font-size: x-large;
	}
</style>
