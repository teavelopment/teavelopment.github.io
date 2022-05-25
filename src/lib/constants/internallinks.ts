import { base } from '$app/paths';

export default abstract class InternalLinks {
	static home = base;
	static apps = base + '/apps';
	static countDoko = base + '/apps/countDoko';
	static openSource = base + '/openSource';
	static privacyPolicy = base + '/privacyPolicy';
	static legalNotice = base + '/legalNotice';
	static faqs = base + '/faqs';
}
