/**
 * Feature content — single source of truth for the home grid and the
 * Features page. `homeGrid` marks the six cards shown on the home page.
 *
 * Per early feedback (Nick): on the home grid the Team Store card is replaced
 * by the Coach's Toolbox card. Team Store still lives on the Features page as a
 * supporting, revenue-generating feature.
 *
 * `icon` holds the inner markup of a 0 0 24 24 stroke SVG (see FeatureCard).
 */
export interface Feature {
  id: string;
  title: string;
  /** Short line for the home grid. */
  blurb: string;
  /** Longer paragraph for the Features page. */
  detail: string;
  /** Whether this appears in the six-card home grid. */
  homeGrid: boolean;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 'registration',
    title: 'Registration & payments',
    blurb:
      'Sign families up in minutes and get paid automatically — plans, discounts, and receipts all handled, so you stop chasing dues.',
    detail:
      'Custom registration forms route players into the right program from how they answer — perfect for tryouts. Card payments, payment plans, discount codes, and receipts are handled for you, so dues stop being a chase.',
    homeGrid: true,
    icon: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    blurb:
      'Practices, games, and events across every team — set once, and families always know exactly where to be.',
    detail:
      'Set the calendar once and every family sees it. Players RSVP, and coaches see who is in before they leave the house. Tournament games you host port straight onto your team schedules — no double entry.',
    homeGrid: true,
    icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  },
  {
    id: 'tournaments',
    title: 'Tournaments',
    blurb:
      'Pools, brackets, and standings without the spreadsheet gymnastics. Score on your phone courtside — the bracket updates itself.',
    detail:
      'Create a tournament, open registration to other programs, and drop teams onto a master grid with your rules built in — divisions, tiers, and constraints checked as you schedule. Score courtside on your phone and pool play advances to brackets automatically.',
    homeGrid: true,
    icon: '<path d="M6 4v6a6 6 0 0012 0V4M4 4h16M9 20h6M12 16v4"/>',
  },
  {
    id: 'evaluations',
    title: 'Player evaluations',
    blurb:
      'Give every player a clear picture of their growth, season over season — the report card families actually keep.',
    detail:
      'Build a questionnaire from a library of skills, each with a plain-English definition, and rate on a simple 1–5 scale. Coaches fill it out in minutes; families get a report card they keep season over season. Player-and-parent feedback on coaches closes the loop.',
    homeGrid: true,
    icon: '<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    id: 'coach-toolbox',
    title: "Coach's toolbox",
    blurb:
      'Keep every coach on the same page — shared program guidelines, plays, drills, and practice plans across your whole org.',
    detail:
      'Give every coach your program’s playbook in one place: guidelines, sets and plays, a drill library, and practice plans they can pull from. New and volunteer coaches run practice the way your club wants it — so players get a consistent experience from one team and age group to the next.',
    homeGrid: true,
    icon: '<path d="M4 4.5A2.5 2.5 0 016.5 2H20v15H6.5A2.5 2.5 0 004 19.5z"/><path d="M4 19.5A2.5 2.5 0 006.5 22H20M9 7h7M9 11h5"/>',
  },
  {
    id: 'families',
    title: 'One home for families',
    blurb:
      'A single app for schedules, payments, film, and updates — so parents stop emailing you and start showing up prepared.',
    detail:
      'Everything a family needs lives in one app: the schedule, what they owe, gear they ordered, evaluations, and program updates. Fewer "when and where is practice?" emails, more families showing up prepared.',
    homeGrid: true,
    icon: '<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M10 18h4"/>',
  },
  {
    id: 'team-store',
    title: 'Team store',
    blurb:
      'Sell gear without a separate storefront. Orders, sizes, and pickup lists sorted for you — no more shoebox of order forms.',
    detail:
      'Open a preorder window, list the gear, and let parents order for the right player — sizes and jersey numbers pulled straight from your roster. When the window closes you get one clean supplier order and a pickup list. A revenue line for the club without standing up a separate store.',
    homeGrid: false,
    icon: '<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z"/>',
  },
];

export const homeFeatures = features.filter((f) => f.homeGrid);
