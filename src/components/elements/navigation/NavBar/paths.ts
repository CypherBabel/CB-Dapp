import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Indices',
    href: '/indices',
    children: [
      {
        label: 'MC20',
        subLabel: 'MC20 index',
        href: '/indices/mc20',
        logo: 'token',
      },
      {
        label: 'CIC60',
        subLabel: 'CIC60 index',
        href: '/indices/cic60',
        logo: 'token',
      },
    ],
  },
  { label: 'CICS', href: '/cics' },
  { label: 'Linktr.ee', href: '/linktree' },
  { label: 'Docs', href: '/docs' },
];

export default NAV_LINKS;
