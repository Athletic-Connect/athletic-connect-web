/**
 * Home-page benefit grid. These are the concrete, benefit-led cards shown on
 * the landing page (what the platform does for a club day to day). The
 * structured, sellable "modules" view lives in src/data/modules.ts and drives
 * the Features page.
 *
 * Copy style: no em dashes, no semicolons in prose.
 *
 * `icon` holds the inner markup of a 0 0 24 24 stroke SVG (see FeatureCard).
 */
export interface Feature {
  id: string;
  title: string;
  /** Short line for the home grid. */
  blurb: string;
  /** Longer paragraph, if the card is reused in a detailed context. */
  detail: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 'registration',
    title: 'Registration & payments',
    blurb:
      'Sign families up in minutes and get paid automatically. Plans, discounts, and receipts are handled for you, so you stop chasing dues.',
    detail:
      'Custom registration forms make it easy to sign up and automatically route players into the right program. Card payments, payment plans, discount codes, and receipts are handled for you, so dues stop being a chase.',
    icon: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    blurb:
      'Practices, games, and events across every team. Set it once, and families always know exactly where to be.',
    detail:
      'Set the calendar once and every family sees it. Players mark their availability, and coaches see who is in before they leave the house. Tournament games you host flow straight onto your team schedules, with no double entry.',
    icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  },
  {
    id: 'tournaments',
    title: 'Tournaments',
    blurb:
      'Pools, brackets, and standings without the spreadsheet gymnastics. Score on your phone courtside and the bracket updates itself.',
    detail:
      'Create a tournament, open registration to other programs, and drop teams onto a master grid with your rules built in. Divisions, tiers, and constraints are checked as you schedule. Score courtside on your phone and pool play advances to brackets automatically.',
    icon: '<path d="M6 4v6a6 6 0 0012 0V4M4 4h16M9 20h6M12 16v4"/>',
  },
  {
    id: 'website',
    title: 'Club website',
    blurb:
      'A public club page you can actually keep current. Pick a template, add your photos and sponsors, point your own domain at it, and let your programs update themselves.',
    detail:
      "Pick a template and colour, add a hero photo, write as many sections about your club as you like, and show your sponsors. Point your own domain at it. Your live program list publishes itself, so open a registration and it appears. Already have a site you like? Copy the widget code and embed the same live program list there instead.",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  },
  {
    id: 'evaluations',
    title: 'Player evaluations',
    blurb:
      'Give every player a clear picture of their growth, season over season. The report card families actually keep.',
    detail:
      "Coaches rate players on a simple 1 to 5 scale from a library of skills, each with a plain-English definition. Families get a report card they keep, so they can track a player's development over time, season over season. Player and parent feedback on coaches and programs closes the loop.",
    icon: '<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    id: 'coach-toolbox',
    title: "Coach's toolbox",
    blurb:
      'Keep every coach on the same page with shared program guidelines, plays, drills, and practice plans across your whole org.',
    detail:
      "Give every coach your program's playbook in one place: guidelines, sets and plays, a drill library, and practice plans they can pull from. New and volunteer coaches run practice the way your club wants it, so players get a consistent experience from one team and age group to the next.",
    icon: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a3 3 0 016 0v1M9 10h6M9 14h4"/>',
  },
  {
    id: 'families',
    title: 'One home for families',
    blurb:
      'A single app for schedules, payments, film, and updates, so parents stop emailing you and start showing up prepared.',
    detail:
      "Everything a family needs lives in one app: the schedule, what they owe, gear they ordered, evaluations, and program updates. Fewer “when and where is practice?” emails, and more families showing up prepared.",
    icon: '<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M10 18h4"/>',
  },
];

/**
 * Home page order. Kept explicit and separate from `features` so the features
 * page (which looks items up by id) is unaffected by reordering here.
 */
export const homeFeatures = [
  'registration',
  'scheduling',
  'families',
  'evaluations',
  'coach-toolbox',
  'tournaments',
].map((id) => features.find((f) => f.id === id)!);
