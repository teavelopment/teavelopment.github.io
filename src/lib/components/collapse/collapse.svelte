<script>
	let isOpen = false;
	export let title = '';
</script>

<div class="collapse collapse-arrow border-4 border-primary rounded-box">
	<input type="checkbox" class="peer" bind:checked={isOpen} />
	<div class="collapse-title font-bold bg-base-content text-black">
		{title}
	</div>
	<div class="collapse-content bg-base-content text-black ">
		<slot />
	</div>
</div>
