<script>
	import Copyright from './Copyright.svelte';
	import Teavelopment from './Teavelopment.svelte';

	import { contacts } from './Contacts';
	import ContactItem from './Contact_item.svelte';
	import { t } from '$lib/translations';
	import InternalLinks from '$lib/constants/internallinks';
	import HorizontalLine from '$lib/components/line/horizontalLine.svelte';
</script>

<HorizontalLine />
<footer class="footer p-10 text-base-content maxWidth">
	<Teavelopment />

	<!-- Contacts -->
	<div>
		<span class="footer-title">{$t('main.contact')}</span>
		<ContactItem contact={contacts.email} />
		<ContactItem contact={contacts.linkedIn} />
		<ContactItem contact={contacts.facebook} />
	</div>

	<!-- Legal -->
	<div>
		<span class="footer-title">{$t('main.legal')}</span>
		<a href={InternalLinks.privacyPolicy} class="link link-hover">{$t('main.privacyPolicy')}</a>
		<a href={InternalLinks.legalNotice} class="link link-hover">{$t('main.legalNotice')}</a>
	</div>
</footer>

<footer class="footer footer-center px-10 py-4 text-base-content">
	<Copyright />
</footer>
