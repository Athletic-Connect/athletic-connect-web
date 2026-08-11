/**
 * Pricing content — public, customer-facing view of the pricing model.
 *
 * Model (see the founding-team pricing strategy):
 *   - No monthly subscription for clubs. Buy modules once; bundle to save.
 *   - A small all-in fee on payments processed in-platform, in line with what
 *     families already pay incumbents, sliding down as volume grows. Most clubs
 *     pass it to families at checkout (the norm), so out-of-pocket can be ~$0.
 *   - One-time migration help (waivable for annual commitments / lighthouse).
 *   - Enterprise is a needs-based "Contact us" tier (multi-org, SSO, SLAs,
 *     compliance, white-label) — never priced by who the buyer is.
 *
 * Dollar figures from the strategy are explicitly illustrative and the take
 * schedule is an open decision, so exact numbers are intentionally NOT shown
 * here — plans route to "get custom pricing". When numbers lock, add a `price`
 * to each bundle below.
 */

/** The high-level "how you pay" points — short, shared by the home teaser. */
export const pricingPoints: string[] = [
  'No monthly subscription — buy only what you need',
  'A small fee on the payments you process, dropping as you grow',
  'Pass it to families at checkout, or absorb it — your call',
  'No long contracts, and we help you move your data over',
];

export interface Bundle {
  name: string;
  who: string;
  /** Short price framing shown large on the card. */
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
}

export const bundles: Bundle[] = [
  {
    name: 'Starter',
    who: 'A single program getting online for the first time.',
    price: 'Start free',
    priceNote: 'The Programs module, then just a small fee on payments.',
    features: [
      'Registration & online payments',
      'Scheduling & RSVP',
      "Roster & the coach's toolbox",
      'One home for families',
    ],
    cta: 'Start free',
    ctaHref: '/#demo',
  },
  {
    name: 'Club',
    who: 'A full program running teams, events, and gear.',
    price: 'Pay as you grow',
    priceNote: 'Programs + Tournaments + Store — bundled to save.',
    features: [
      'Everything in Starter',
      'Host tournaments — pools, brackets & courtside scoring',
      'Team store (preorder gear)',
      'Priority support',
    ],
    cta: 'Get custom pricing',
    ctaHref: '/#demo',
    featured: true,
  },
  {
    name: 'Elite',
    who: 'A program that wants the whole platform.',
    price: 'Best bundle',
    priceNote: 'All five modules at the lowest combined price.',
    features: [
      'Everything in Club',
      'Player evaluations & coach feedback',
      'Film & highlights',
      'Every module, best bundle price',
    ],
    cta: 'Get custom pricing',
    ctaHref: '/#demo',
  },
];

/** À la carte modules — buy just what you need; bundle more to save. */
export interface Module {
  name: string;
  desc: string;
  priced: string;
}

export const modules: Module[] = [
  {
    name: 'Programs',
    desc: 'Registration, payments, scheduling, roster, and one home for families.',
    priced: 'Priced per team',
  },
  {
    name: 'Tournaments',
    desc: 'Host events with divisions, pools, brackets, and courtside scoring.',
    priced: 'Per event — your first two are included',
  },
  {
    name: 'Evaluations',
    desc: "A player's development history, season over season — the report card families keep.",
    priced: 'Priced per athlete',
  },
  {
    name: 'Store',
    desc: 'Preorder team gear, tied to your roster — one clean supplier order at close.',
    priced: 'One-time unlock',
  },
  {
    name: 'Film',
    desc: 'Upload game film and build highlights for development and recruiting.',
    priced: 'Priced per team',
  },
];

/** Enterprise tier — defined by capabilities buyers self-select into. */
export const enterprise = {
  who: 'Multi-sport organizations, parks & rec, districts, franchises, and governing bodies.',
  features: [
    'Multi-organization hierarchy with consolidated cross-program reporting',
    'SSO, advanced roles & permissions, and audit trails',
    'SLAs, a dedicated success manager, and priority support',
    'Security & compliance review (SOC 2) and data-processing agreements',
    'Custom configuration, white-label surfaces, and API access',
  ],
};
