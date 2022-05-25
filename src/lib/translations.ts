import i18n from 'sveltekit-i18n';
import lang from './lang.json';
import { base } from '$app/paths';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	translations: {
		en: { lang },
		de: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'main',
			loader: async () => (await import('../lang/en/main.json')).default
		},
		{
			locale: 'en',
			key: 'apps',
			loader: async () => (await import('../lang/en/apps.json')).default
		},
		{
			locale: 'en',
			key: 'openSource',
			loader: async () => (await import('../lang/en/openSource.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('../lang/en/index.json')).default
		},
		{
			locale: 'de',
			key: 'main',
			loader: async () => (await import('../lang/de/main.json')).default
		},
		{
			locale: 'de',
			key: 'apps',
			loader: async () => (await import('../lang/de/apps.json')).default
		},
		{
			locale: 'de',
			key: 'openSource',
			loader: async () => (await import('../lang/de/openSource.json')).default
		},
		{
			locale: 'de',
			key: 'home',
			loader: async () => (await import('../lang/de/index.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
