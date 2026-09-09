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
      'Replaces a portion of your income if a covered illness or injury keeps you from working. Your paycheck is likely your biggest asset — this keeps it working even when you can’t.',
    covers: [
      'A percentage of your monthly income while you are disabled',
      'Off-the-job accidents and illnesses',
      'Benefits paid directly to you, to spend however you need',
    ],
    howItWorks:
      'You choose a monthly benefit amount and a benefit period when you enroll. If you become disabled and satisfy a short waiting period, Colonial Life pays you a set monthly benefit until you recover or the benefit period ends.',
    bestFor:
      'Working adults who rely on their income to cover a mortgage, rent, or day-to-day living expenses.',
  },
  {
    slug: 'life',
    name: 'Life Insurance',
    tagline: 'Security for the people you love',
    icon: 'M12 21s-7-4.35-9.5-8.5C.5 9 2 5 6 5c2.2 0 3.5 1.3 4 2.3C10.5 6.3 11.8 5 14 5c4 0 5.5 4 3.5 7.5C19 16.65 12 21 12 21z',
    summary:
      'Provides a lump-sum benefit to your loved ones if you pass away, so they can cover final expenses, pay off debt, and keep their financial footing.',
    covers: [
      'Funeral and final expenses',
      'Mortgage, loans, and everyday bills',
      'Future needs like college or retirement income for a spouse',
    ],
    howItWorks:
      'Choose term or whole life coverage and a benefit amount. Premiums stay affordable through payroll deduction, and your named beneficiaries receive the benefit as a tax-free lump sum.',
    bestFor:
      'Anyone with a family, a mortgage, or people who depend on their income.',
  },
  {
    slug: 'accident',
    name: 'Accident Insurance',
    tagline: 'Cash for the unexpected',
    icon: 'M13 2L4.5 12.5H11l-1 8L19 9h-6.5l.5-7z',
    summary:
      'Pays benefits directly to you when a covered accident happens — from a broken bone to an ER visit — helping with the costs your major medical plan leaves behind.',
    covers: [
      'Emergency room and urgent care visits',
      'Fractures, dislocations, stitches, and burns',
      'Ambulance, X-rays, physical therapy, and follow-up care',
    ],
    howItWorks:
      'Each covered injury and treatment has a set benefit amount. File a claim after an accident and Colonial Life pays you directly — use it for deductibles, copays, or household bills while you recover.',
    bestFor:
      'Active families, kids in sports, and anyone with a high-deductible health plan.',
  },
  {
    slug: 'critical-illness',
    name: 'Critical Illness Insurance',
    tagline: 'A lump sum when it matters most',
    icon: 'M12 21C7 17 3 13.5 3 9a5 5 0 019-3 5 5 0 019 3c0 4.5-4 8-9 12zM12 8v6M9 11h6',
    summary:
      'Pays a lump-sum benefit when you are diagnosed with a covered condition such as heart attack, stroke, or major organ failure. The money is yours to use any way you need.',
    covers: [
      'Heart attack, stroke, and coronary artery bypass',
      'Major organ failure and end-stage renal failure',
      'A benefit for covered health screenings',
    ],
    howItWorks:
      'You select a benefit amount at enrollment. On diagnosis of a covered illness, Colonial Life pays the full lump sum — helping with treatment costs, travel, lost income, or time off for a caregiver.',
    bestFor:
      'Adults with a family history of serious illness or a high-deductible health plan.',
  },
  {
    slug: 'cancer',
    name: 'Cancer Insurance',
    tagline: 'Support from diagnosis through recovery',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM8 12a4 4 0 018 0M12 8v8',
    summary:
      'Helps offset the out-of-pocket costs of a cancer diagnosis — treatment, travel, and everyday expenses — and pays an added benefit for routine cancer screenings.',
    covers: [
      'Costs from initial diagnosis through treatment and recovery',
      'Travel, lodging, and meals for treatment away from home',
      'An annual benefit for covered cancer screening tests',
    ],
    howItWorks:
      'Benefits are paid for covered services throughout your care. Wellness benefits are paid even if you are never diagnosed, rewarding you for staying on top of screenings.',
    bestFor:
      'Anyone who wants a financial cushion against one of the most common and costly diagnoses.',
  },
  {
    slug: 'hospital-indemnity',
    name: 'Hospital Indemnity Insurance',
    tagline: 'Cover the cost of a hospital stay',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M10 9h4M12 7v4M9 21v-4a3 3 0 016 0v4',
    summary:
      'Pays a benefit directly to you for hospital admission, confinement, and outpatient surgery — on top of any medical insurance you already carry.',
    covers: [
      'Hospital admission and daily confinement',
      'Outpatient surgery and diagnostic procedures',
      'Intensive care unit stays',
    ],
    howItWorks:
      'When you are admitted to the hospital, you receive a fixed lump-sum admission benefit plus a set amount for each day of your stay — money you can put toward deductibles or bills at home.',
    bestFor:
      'Families with a high-deductible plan and anyone planning for a surgery or a new baby.',
  },
  {
    slug: 'dental-vision',
    name: 'Dental & Vision Insurance',
    tagline: 'Everyday care for your smile and sight',
    icon: 'M12 5c-2-2.5-5-3-7-1.5C2.5 6 3.5 12 5 16c.8 2.2 1.8 3 2.8 3 1.2 0 1.6-1.5 4.2-1.5s3 1.5 4.2 1.5c1 0 2-.8 2.8-3 1.5-4 2.5-10 0-12.5C19 2 16 2.5 14 5',
    summary:
      'Covers routine and unexpected dental work, with optional vision coverage for exams, lenses, and frames. Care for the checkups that keep small problems small.',
    covers: [
      'Preventive cleanings, exams, and X-rays',
      'Fillings, crowns, and major dental work',
      'Optional vision: annual eye exams, lenses, and frame allowance',
    ],
    howItWorks:
      'Use a large national network or your own dentist. Preventive visits are covered from day one, and premiums are paid conveniently through payroll deduction.',
    bestFor:
      'Individuals and families without employer dental or vision coverage.',
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
