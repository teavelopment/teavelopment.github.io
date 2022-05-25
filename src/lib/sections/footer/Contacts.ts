import SourcesLinks from '$lib/constants/sourceslinks';
import ExternalLinks from '../../constants/externallinks';

export type Contact = {
	url: string;
	image: string;
	label: string;
};

const emailContact: Contact = {
	url: ExternalLinks.email,
	image: SourcesLinks.imgGmail,
	label: 'E-Mail'
};

const linkedinContact: Contact = {
	url: ExternalLinks.linkedin,
	image: SourcesLinks.imgLinkedin,
	label: 'LinkedIn'
};

const facebookContact: Contact = {
	url: ExternalLinks.facebook,
	image: SourcesLinks.imgFacebook,
	label: 'Facebook'
};

const instagramContact: Contact = {
	url: '',
	image: SourcesLinks.imgInstagram,
	label: 'Instagram'
};

export const contacts = {
	email: emailContact,
	linkedIn: linkedinContact,
	facebook: facebookContact
};
