/**
 * The structured Features-page content, in two buckets:
 *   1. modules   the sellable units a club chooses (map to pricing)
 *   2. platform  what every plan includes (not sold a la carte)
 * Plus `roles`, the "a view for every role" section.
 *
 * Copy style: no em dashes, no semicolons in prose.
 * `icon` holds the inner markup of a 0 0 24 24 stroke SVG (see FeatureCard).
 */
export interface Module {
  id: string;
  title: string;
  blurb: string;
  detail: string;
  icon: string;
  /** Optional tag shown on the card, e.g. audience note. */
  tag?: string;
}

export const modules: Module[] = [
  {
    id: 'programs',
    title: 'Programs',
    blurb:
      'The core of running your teams: registration, payments, scheduling, rosters, and the tools your coaches use.',
    detail:
      "Sign families up with custom forms, take card payments and payment plans, and set one schedule everyone can see. Your roster feeds everything else, and every coach gets your club's playbook of guidelines, plays, drills, and practice plans. One home for families ties it together.",
    icon: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  },
  {
    id: 'leagues',
    title: 'Leagues',
    blurb:
      'Run recurring league play across a full season, with divisions, weekly schedules, and standings that update as scores come in.',
    detail:
      'Built for season-long play rather than weekend events. Set up divisions, generate a season of games, and keep live standings as results come in. A fit for rec departments, adult leagues, and house leagues, not just travel clubs.',
    icon: '<path d="M4 5h16M4 10h16M4 15h16M4 20h9"/><circle cx="19" cy="20" r="1.6"/>',
  },
  {
    id: 'tournaments',
    title: 'Tournaments',
    blurb:
      'Pools, brackets, and standings without the spreadsheet gymnastics. Score courtside and the bracket updates itself.',
    detail:
      'Create a tournament, open registration to other programs, and drop teams onto a master grid with your rules built in. Divisions, tiers, and constraints are checked as you schedule. Score courtside on your phone and pool play advances to brackets automatically.',
    icon: '<path d="M6 4v6a6 6 0 0012 0V4M4 4h16M9 20h6M12 16v4"/>',
  },
  {
    id: 'evaluations',
    title: 'Evaluations',
    blurb:
      'A clear picture of every player’s growth, season over season. The report card families actually keep.',
    detail:
      'Build a questionnaire from a library of skills, each with a plain-English definition, and rate on a simple 1 to 5 scale. Coaches fill it out in minutes, and families get a report card they keep season over season. Player and parent feedback on coaches closes the loop.',
    icon: '<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    id: 'store',
    title: 'Team store',
    blurb:
      'Sell gear without a separate storefront. Orders, sizes, and pickup lists are sorted for you.',
    detail:
      'Open a preorder window, list the gear, and let parents order for the right player, with sizes and jersey numbers pulled straight from your roster. When the window closes you get one clean supplier order and a pickup list. A revenue line for the club without standing up a separate store.',
    icon: '<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z"/>',
  },
  {
    id: 'film',
    title: 'Film',
    blurb:
      'Upload game film and turn it into highlights for player development and recruiting.',
    detail:
      'Bring game footage into the same place as the rest of your program, then build highlights players can share for development and recruiting. No more film sitting unused on a parent’s phone.',
    icon: '<path d="M4 5h16v14H4z"/><path d="M10 9l5 3-5 3z"/>',
  },
];

/** "A view for every role" section. */
export interface RoleView {
  role: string;
  line: string;
}

export const roles: RoleView[] = [
  {
    role: 'Directors & admins',
    line: 'Run the whole club: registrations, payments, events, and reports, all in one place.',
  },
  {
    role: 'Coaches',
    line: "Focus on your team. Schedule, roster, availability, and the playbook. The club's got your back.",
  },
  {
    role: 'Staff',
    line: 'Scoped access to exactly the jobs they own, like admissions, scorekeeping, or stats, and nothing else.',
  },
  {
    role: 'Families',
    line: "One simple app for registration, schedules, scores, evaluations, and gear. You're always up to date.",
  },
];

/** Platform capabilities included with every plan (not sold a la carte). */
export interface Capability {
  title: string;
  blurb: string;
  icon: string;
}

export const platform: Capability[] = [
  {
    title: 'Reporting',
    blurb:
      'See the numbers that matter across registrations, payments, and teams, ready to export when you need them.',
    icon: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  },
  {
    title: 'Import & export',
    blurb:
      'Bring rosters, history, and schedules in from your old tools, and take your data out any time. Your data stays yours.',
    icon: '<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>',
  },
  {
    title: 'Communication',
    blurb:
      'Reach a team or your whole program in one place, so updates actually land instead of getting lost in a group text.',
    icon: '<path d="M4 5h16v11H8l-4 4z"/>',
  },
  {
    title: 'Web and mobile',
    blurb:
      'Everything works in the browser and in the app, so coaches and families have it wherever they are.',
    icon: '<rect x="3" y="4" width="13" height="10" rx="1.5"/><rect x="17" y="9" width="4" height="11" rx="1"/><path d="M6 20h6"/>',
  },
];

/**
 * "More of what's inside" — the Show more reveal on the Features page, in two
 * groups: additional modules and platform. No pricing language here.
 */
export const moreModules: Capability[] = [
  {
    title: 'Team store',
    blurb:
      'Sell gear without a separate storefront. Sizes and numbers pull from your roster, and you get one clean order and a pickup list.',
    icon: '<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z"/>',
  },
  {
    title: 'Film',
    blurb:
      'Upload game film and turn it into highlights for player development and recruiting, all in the same place as everything else.',
    icon: '<path d="M4 5h16v14H4z"/><path d="M10 9l5 3-5 3z"/>',
  },
];

export const morePlatform: Capability[] = [
  {
    title: 'Tryouts',
    blurb:
      'Run tryouts start to finish. Tough decisions have never been easier. Custom questions place players into the right group, coaches score them on the spot, and assigning players to teams is seamless.',
    icon: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a3 3 0 016 0v1M9 12l2 2 4-4"/>',
  },
  {
    title: 'Locations',
    blurb:
      'Keep every venue in one place, so schedules and directions are handled for you. No more double bookings.',
    icon: '<path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  },
  {
    title: 'Admin & permissions',
    blurb:
      'Give the right people the right access. Directors run the club, and everyone else sees just their part.',
    icon: '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><circle cx="12" cy="11" r="1.6"/><path d="M12 12.6V15"/>',
  },
  {
    title: 'Import & export',
    blurb:
      'Bring rosters, history, and schedules in from your old tools, and take your data out any time. Your data stays yours.',
    icon: '<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>',
  },
  {
    title: 'Notifications',
    blurb:
      'Automatic reminders reach families at the right time, so fewer people miss a game, a form, or a payment.',
    icon: '<path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.5 21a2 2 0 01-3 0"/>',
  },
];
