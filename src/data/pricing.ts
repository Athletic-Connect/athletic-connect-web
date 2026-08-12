/**
 * Pricing content: public, customer-facing view of the pricing model.
 *
 * Model (see the founding-team pricing strategy):
 *   - No monthly subscription for clubs. Buy modules once, and bundle to save.
 *   - A small all-in fee on payments processed in-platform, in line with what
 *     families already pay incumbents, sliding down as volume grows. Most clubs
 *     pass it to families at checkout (the norm), so out-of-pocket can be ~$0.
 *   - One-time migration help (waivable for annual commitments or lighthouse).
 *   - Enterprise is a needs-based "Contact us" tier (multi-org, SSO, SLAs,
 *     compliance, white-label), never priced by who the buyer is.
 *
 * Evaluations is included from Starter up (it is our stickiest asset, so it
 * goes in every club from day one). Leagues is a separate module aimed at
 * league and rec operators rather than the travel-club bundle ladder.
 *
 * Dollar figures from the strategy are explicitly illustrative and the take
 * schedule is an open decision, so exact numbers are intentionally NOT shown
 * here. Plans route to "get custom pricing". When numbers lock, add a `price`
 * to each bundle below.
 *
 * Copy style: no em dashes, no semicolons in prose.
 */

/** The high-level "how you pay" points, short, shared by the home teaser. */
export const pricingPoints: string[] = [
  'No monthly subscription, just buy what you need',
  'A small fee on the payments you process, dropping as you grow',
  'Pass it to families at checkout, or absorb it. Your call.',
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
      'Player evaluations',
      'One home for families',
    ],
    cta: 'Start free',
    ctaHref: '/#demo',
  },
  {
    name: 'Club',
    who: 'A full program running teams, events, and gear.',
    price: 'Pay as you grow',
    priceNote: 'Everything in Starter, plus Tournaments and Team store.',
    features: [
      'Everything in Starter',
      'Host tournaments with pools, brackets, and courtside scoring',
      'Team store for preorder gear',
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
    priceNote: 'Everything in Club, plus Film, at the lowest combined price.',
    features: [
      'Everything in Club',
      'Film and highlights',
      'The whole platform, at your best rate',
    ],
    cta: 'Get custom pricing',
    ctaHref: '/#demo',
  },
];

/** A la carte modules. Buy just what you need, and bundle more to save. */
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
    name: 'Leagues',
    desc: 'Season-long league play with divisions, schedules, and live standings.',
    priced: 'For league and rec operators',
  },
  {
    name: 'Tournaments',
    desc: 'Host events with divisions, pools, brackets, and courtside scoring.',
    priced: 'Per event, your first two are included',
  },
  {
    name: 'Evaluations',
    desc: "A player's development history, season over season. The report card families keep.",
    priced: 'Included from Starter',
  },
  {
    name: 'Team store',
    desc: 'Preorder team gear, tied to your roster, with one clean supplier order at close.',
    priced: 'One-time unlock',
  },
  {
    name: 'Film',
    desc: 'Upload game film and build highlights for development and recruiting.',
    priced: 'Priced per team',
  },
];

/** Enterprise tier, defined by capabilities buyers self-select into. */
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
