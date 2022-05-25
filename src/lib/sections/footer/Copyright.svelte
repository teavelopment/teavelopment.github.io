<script>
	import { t } from '$lib/translations';
	const currentYear = new Date().getFullYear();
</script>

<p>{$t('main.copyright').replace('{currentYear}', currentYear)}</p>
