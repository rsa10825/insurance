export type Product = {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // inline SVG path data (24x24 viewBox, stroke)
  summary: string;
  covers: string[];
  howItWorks: string;
  bestFor: string;
};

export const products: Product[] = [
  {
    slug: 'disability',
    name: 'Disability Insurance',
    tagline: 'Protect your paycheck',
    icon: 'M12 3v18M5 8l7-4 7 4M5 8v8l7 4 7-4V8',
    summary:
      'Replaces a portion of an employee’s income if a covered illness or injury keeps them from working. For most of your team, the paycheck is the biggest asset they own — this protects it.',
    covers: [
      'A percentage of your monthly income while you are disabled',
      'Off-the-job accidents and illnesses',
      'Benefits paid directly to you, to spend however you need',
    ],
    howItWorks:
      'Each employee chooses a monthly benefit amount and benefit period at enrollment and pays through payroll deduction. If they become disabled and satisfy a short waiting period, Colonial Life pays them a set monthly benefit until they recover or the benefit period ends.',
    bestFor:
      'Teams where most people live on their paycheck — trades, hospitality, healthcare, warehouse, and office staff.',
  },
  {
    slug: 'life',
    name: 'Life Insurance',
    tagline: 'Security for the people you love',
    icon: 'M12 21s-7-4.35-9.5-8.5C.5 9 2 5 6 5c2.2 0 3.5 1.3 4 2.3C10.5 6.3 11.8 5 14 5c4 0 5.5 4 3.5 7.5C19 16.65 12 21 12 21z',
    summary:
      'Provides a lump-sum benefit to an employee’s loved ones if they pass away, so the family can cover final expenses, pay off debt, and keep their footing.',
    covers: [
      'Funeral and final expenses',
      'Mortgage, loans, and everyday bills',
      'Future needs like college or retirement income for a spouse',
    ],
    howItWorks:
      'Employees choose term or whole life coverage and a benefit amount, with guaranteed-issue amounts available at enrollment (no medical exam). Premiums are paid through payroll deduction and the policy is portable if they leave.',
    bestFor:
      'Any workforce — a simple, guaranteed-issue option employees can build on, especially where your group life amount is thin.',
  },
  {
    slug: 'accident',
    name: 'Accident Insurance',
    tagline: 'Cash for the unexpected',
    icon: 'M13 2L4.5 12.5H11l-1 8L19 9h-6.5l.5-7z',
    summary:
      'Pays benefits directly to the employee when a covered accident happens — from a broken bone to an ER visit — covering the costs the medical plan leaves behind.',
    covers: [
      'Emergency room and urgent care visits',
      'Fractures, dislocations, stitches, and burns',
      'Ambulance, X-rays, physical therapy, and follow-up care',
    ],
    howItWorks:
      'Each covered injury and treatment has a set benefit amount. The employee files a claim after an accident and Colonial Life pays them directly — for deductibles, copays, or bills at home while they recover.',
    bestFor:
      'Physical and active workforces — construction, manufacturing, hospitality — and any team on a high-deductible health plan.',
  },
  {
    slug: 'critical-illness',
    name: 'Critical Illness Insurance',
    tagline: 'A lump sum when it matters most',
    icon: 'M12 21C7 17 3 13.5 3 9a5 5 0 019-3 5 5 0 019 3c0 4.5-4 8-9 12zM12 8v6M9 11h6',
    summary:
      'Pays a lump-sum benefit when an employee is diagnosed with a covered condition such as heart attack, stroke, or major organ failure. The money is theirs to use any way they need.',
    covers: [
      'Heart attack, stroke, and coronary artery bypass',
      'Major organ failure and end-stage renal failure',
      'A benefit for covered health screenings',
    ],
    howItWorks:
      'Employees select a benefit amount at enrollment and pay by payroll deduction. On diagnosis of a covered illness, Colonial Life pays the full lump sum — for treatment costs, travel, lost income, or a caregiver.',
    bestFor:
      'Companies whose health plan carries a high deductible or out-of-pocket maximum, and older or family-heavy workforces.',
  },
  {
    slug: 'cancer',
    name: 'Cancer Insurance',
    tagline: 'Support from diagnosis through recovery',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM8 12a4 4 0 018 0M12 8v8',
    summary:
      'Helps an employee offset the out-of-pocket costs of a cancer diagnosis — treatment, travel, and everyday expenses — and pays an added benefit for routine screenings.',
    covers: [
      'Costs from initial diagnosis through treatment and recovery',
      'Travel, lodging, and meals for treatment away from home',
      'An annual benefit for covered cancer screening tests',
    ],
    howItWorks:
      'Benefits are paid for covered services throughout the employee’s care. A wellness benefit is paid even if they are never diagnosed, so the coverage rewards routine screenings.',
    bestFor:
      'Any employer that wants a visible, appreciated benefit against a common diagnosis at no company cost.',
  },
  {
    slug: 'hospital-indemnity',
    name: 'Hospital Indemnity Insurance',
    tagline: 'Cover the cost of a hospital stay',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M10 9h4M12 7v4M9 21v-4a3 3 0 016 0v4',
    summary:
      'Pays a benefit directly to the employee for hospital admission, confinement, and outpatient surgery — on top of the medical plan they already have.',
    covers: [
      'Hospital admission and daily confinement',
      'Outpatient surgery and diagnostic procedures',
      'Intensive care unit stays',
    ],
    howItWorks:
      'When an employee is admitted to the hospital, they receive a fixed lump-sum admission benefit plus a set amount for each day of the stay — paid to them, for deductibles or bills at home.',
    bestFor:
      'Teams on high-deductible health plans, and workforces with growing families or an older age band.',
  },
  {
    slug: 'dental-vision',
    name: 'Dental & Vision Insurance',
    tagline: 'Everyday care for your smile and sight',
    icon: 'M12 5c-2-2.5-5-3-7-1.5C2.5 6 3.5 12 5 16c.8 2.2 1.8 3 2.8 3 1.2 0 1.6-1.5 4.2-1.5s3 1.5 4.2 1.5c1 0 2-.8 2.8-3 1.5-4 2.5-10 0-12.5C19 2 16 2.5 14 5',
    summary:
      'Covers routine and unexpected dental work for employees, with optional vision coverage for exams, lenses, and frames — the checkups that keep small problems small.',
    covers: [
      'Preventive cleanings, exams, and X-rays',
      'Fillings, crowns, and major dental work',
      'Optional vision: annual eye exams, lenses, and frame allowance',
    ],
    howItWorks:
      'Employees use a large national network or their own dentist. Preventive visits are covered from day one, and premiums are paid through payroll deduction.',
    bestFor:
      'Employers who don’t offer dental or vision today, or want to round out a thin plan without adding company cost.',
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
