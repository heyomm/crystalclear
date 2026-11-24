// To add a product: put `<file>-640.webp` and `<file>-1100.webp` in
// public/images/products/ and add an entry below. `width`/`height` are the
// pixel size of the 640 version. Only list details you can confirm; leave
// `highlights` empty when information is not available.

const IMAGE_BASE = '/images/products'

const image = (file, width, height, alt) => ({
  alt,
  width,
  height,
  src: `${IMAGE_BASE}/${file}-640.webp`,
  srcLarge: `${IMAGE_BASE}/${file}-1100.webp`,
})

export const products = [
  {
    id: 'aqua-era-silk',
    name: 'Aqua ERA Silk Series',
    category: 'RO Water Purifier',
    description:
      'Silk Series water purifier from Aqua ERA with a ribbed transparent storage tank and a front indicator panel.',
    highlights: ['Power, Full and Purify indicators', 'Finishes shown: Blue and Beige'],
    images: [
      image('era-silk-blue', 640, 956, 'Aqua ERA Silk Series water purifier in blue'),
      image('era-silk-beige', 640, 923, 'Aqua ERA Silk Series water purifier in beige'),
    ],
  },
  {
    id: 'lexpure-legend',
    name: 'Lexpure Legend Series',
    category: 'RO Water Purifier',
    description:
      'Legend Series water purifier from Lexpure, recognisable by its copper-tone accent band and front dispensing tap.',
    highlights: [
      '5 stage filtration',
      '10 Ltr. storage',
      '18 Ltr./Hr. capacity',
      'Manual TDS controller',
      'Finishes shown: Sand Beige and White',
    ],
    images: [
      image('legend-poster', 640, 906, 'Lexpure Legend Series water purifier brochure in sand beige'),
      image('legend-installed', 640, 898, 'Lexpure Legend water purifier in white mounted on a kitchen wall'),
    ],
  },
  {
    id: 'lx-one-titanium',
    name: 'LX One Titanium Series',
    category: 'RO Purifier Cabinet',
    description:
      'Titanium Series cabinet from LX One with a transparent tank, a front tap and a side indicator panel.',
    highlights: ['Power, Tank Full and Purifying indicators', 'Finish shown: Sapphire Silver', 'More finishes in the range'],
    images: [
      image('lx-one-silver', 640, 904, 'LX One Titanium Series cabinet in Sapphire Silver'),
      image('lx-one-range', 640, 904, 'LX One Titanium Series cabinets in three finishes'),
    ],
  },
  {
    id: 'aqua-innovica',
    name: 'Aqua Innovica',
    category: 'RO Water Purifier',
    description:
      'Wall-mounted Aqua Innovica water purifier in a blue finish, photographed after installation.',
    highlights: [
      'Zinc, Copper and Alkaline label on the unit',
      'Power, Tank Full and Purifying indicators',
      'Finish shown: Blue',
    ],
    images: [
      image('innovica-2', 640, 848, 'Aqua Innovica water purifier in blue with indicator lights on'),
      image('innovica-1', 640, 848, 'Aqua Innovica water purifier in blue mounted on a wall'),
    ],
  },
  {
    id: 'lexpure-ivory',
    name: 'Lexpure Ivory',
    category: 'Alkaline RO',
    description:
      'Ivory alkaline RO water purifier from Lexpure with a transparent storage tank and LED indicators.',
    highlights: ['5 stage filtration', '8 Ltr. storage', '18 Ltr./Hr. capacity', 'Finish shown: Sand Beige'],
    images: [image('ivory', 640, 902, 'Lexpure Ivory alkaline RO water purifier brochure')],
  },
  {
    id: 'lexpure-seron-x',
    name: 'Lexpure Seron-X',
    category: 'RO + Mineral',
    description:
      'Seron Series purifier from Lexpure with RO + Mineral + Silver Nano technology in a grey cabinet.',
    highlights: ['6 stage filtration', '10 Ltr. storage', '18 Ltr./Hr. capacity', 'Finish shown: Premium Grey'],
    images: [image('seron-x', 640, 902, 'Lexpure Seron-X water purifier brochure in premium grey')],
  },
  {
    id: 'sunexa-aqua-x-ilent',
    name: 'Sunexa Aqua X-ilent',
    category: 'Copper RO + UV',
    description:
      'Aqua X-ilent reverse osmosis purifier from Sunexa with Copper RO + UV Alkaline labelling.',
    highlights: ['100 GPD pump', 'UV filter and copper filter', 'P.P spun filter with pre-filter bowl', 'Finish shown: Full Black'],
    images: [image('x-ilent', 640, 663, 'Sunexa Aqua X-ilent water purifier in full black with its box and fittings')],
  },
  {
    id: 'lexcru-lexzon',
    name: 'Lexcru Lexzon',
    category: 'RO Purifier Cabinet',
    description:
      'Lexzon compact cabinet from Lexcru with a transparent tank, a front tap and LED indicators.',
    highlights: ['Compact design', 'LED indicator', 'Finish shown: Metallic Blue', 'Brochure code: BD-ALX-002'],
    images: [image('lexzon', 640, 766, 'Lexcru Lexzon RO cabinet in metallic blue')],
  },
  {
    id: 'aqua-era-core',
    name: 'Aqua ERA Core Series',
    category: 'RO Water Purifier',
    description:
      'Core Series reverse osmosis water purifier from Aqua ERA in a black finish, shown in its retail packaging.',
    highlights: ['Reverse osmosis system', 'Power, Full and Purify indicators', 'Finish shown: Black'],
    images: [image('era-core', 640, 853, 'Aqua ERA Core Series reverse osmosis water purifier box')],
  },
  {
    id: 'nile-aqua-mars',
    name: 'Nile Aqua Mars',
    category: 'RO Water Purifier',
    description: 'Aqua Mars water purifier from Nile with a modern black design and a detachable tank.',
    highlights: ['9 Ltr. detachable tank', 'Finish shown: Black'],
    images: [image('aqua-mars', 640, 872, 'Nile Aqua Mars water purifier in black with a 9 litre detachable tank')],
  },
  {
    id: 'cosmax',
    name: 'Cosmax Water Purifier',
    category: 'RO Water Purifier',
    description:
      'Cosmax wall-mounted purifier with a blue transparent tank and white body, photographed after installation.',
    highlights: ['Wall-mounted installation with pre-filter', 'RO filter label on the unit', 'Finish shown: Blue and White'],
    images: [image('cosmax', 640, 682, 'Cosmax water purifier in blue and white installed on a tiled wall with a pre-filter')],
  },
  {
    id: 'purosis',
    name: 'Purosis Water Purifier',
    category: 'RO + Alkaline',
    description:
      'Purosis water purifier in a white finish, labelled with Puroaqua RO + ALK alkaline technology.',
    highlights: ['RO + Alkaline label on the unit', 'Finish shown: White'],
    images: [image('purosis', 640, 746, 'Purosis RO and alkaline water purifier in white')],
  },
]
