/** Site-wide constants: nav, contact, and calls to action. */
export const site = {
  name: 'Athletic Connect',
  tagline: 'Less admin. More game.',
  description:
    'One platform for registration, scheduling, tournaments, evaluations, payments, and your team store, so you spend less time on admin and more on the game.',
  email: 'hello@athleticconnectapp.com',
  url: 'https://www.athleticconnectapp.com',
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
];
