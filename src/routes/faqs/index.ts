import type { RequestHandler } from '@sveltejs/kit';
import type { App } from 'src/types/app';
import { locale } from '$lib/translations';

export const get: RequestHandler = async (event) => {
	let l = locale.get();

	l === 'de';

	const data =
		l === 'de'
			? (await import('../../../static/data/apps_de.json')).default
			: (await import('../../../static/data/apps_en.json')).default;
	const apps = data as [App];
	return {
		body: {
			apps
		}
	};
};
