<script lang="ts">
	import type { Contact } from './Contacts';
	export let contact: Contact;
</script>

<a href={contact.url} class="flex flex-nowrap flex-row gap-x-2.5 items-center link link-hover">
	<img class="h-10 w-10" src={contact.image} alt="Contact Icon" />
	<div>{contact.label}</div>
</a>
