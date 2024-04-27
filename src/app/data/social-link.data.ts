import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, instagram, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: '',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: '',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:tapangharveysalas@gmail.com?subject=Hi Harvey!',
    color: '#e74c3c',
  },
  {
    name: 'Instagram',
    path: instagram,
    link: '',
    color: '#E52765',
  },
];

export default socialLinkData;
