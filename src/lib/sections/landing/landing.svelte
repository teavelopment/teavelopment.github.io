<script>
	import SourcesLinks from '$lib/constants/sourceslinks';

	import { t } from '$lib/translations';
</script>

<section class="relative w-full min-h-[700px] h-[900px]">
	<!-- Background -->
	<div class="h-full w-full flex flex-col">
		<div class="bg-base-content flex-1" />
		<div class="bg-base-100 flex-1" />
	</div>
	<!-- Text -->
	<div class="absolute top-0 right-0 left-0 h-full maxWidth w-full ">
		<div class="h-full flex flex-col ">
			<div class="flex-1">
				<div class="h-full flex flex-col justify-end px-8">
					<div>
						<h1 class="inline-block text-6xl text-primary">
							{$t('home.teaPoweredDevelopment')}
						</h1>
					</div>
					<div class="h-48" />
				</div>
			</div>
			<div class="flex-1">
				<div class="h-full flex flex-col justify-start items-end px-8">
					<div class="h-48" />
					<div>
						<h1 class="inline-block text-6xl ">
							{$t('home.splendidTaste')}
						</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Cup -->
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<img src={SourcesLinks.imgTeacup} height="300" width="300" alt="" />
	</div>
</section>
