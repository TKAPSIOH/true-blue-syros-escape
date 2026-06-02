export type Property = {
  id: string;
  name: string;
  area: string;
  street: string;
  maxGuests: number;
  sizeSqm: number;
  bedrooms: number;
  bathrooms: number;
  amenities: { wifi: boolean; ac: boolean; parking: boolean };
  bookingUrl: string;
  images: string[];
  description?: string;
  rates?: { june: number; july: number; august: number };
};

import alexandra027 from "@/assets/alexandra/027.jpg";
import alexandra028 from "@/assets/alexandra/028.jpg";
import alexandra029 from "@/assets/alexandra/029.jpg";
import alexandra031 from "@/assets/alexandra/031.jpg";
import alexandra032 from "@/assets/alexandra/032.jpg";
import alexandra037 from "@/assets/alexandra/037.jpg";
import alexandra039 from "@/assets/alexandra/039.jpg";
import alexandra042 from "@/assets/alexandra/042.jpg";
import alexandra0441 from "@/assets/alexandra/0441.jpg";
import alexandra0471 from "@/assets/alexandra/0471.jpg";
import aplotis002 from "@/assets/aplotis/002.jpg";
import aplotis005 from "@/assets/aplotis/005.jpg";
import aplotis010 from "@/assets/aplotis/010.jpg";
import aplotis027 from "@/assets/aplotis/027.jpg";
import aplotis038 from "@/assets/aplotis/038.jpg";
import aplotis039 from "@/assets/aplotis/039.jpg";
import aplotis067 from "@/assets/aplotis/067.jpg";
import aplotis076 from "@/assets/aplotis/076.jpg";
import aplotis081 from "@/assets/aplotis/081.jpg";
import aplotis094 from "@/assets/aplotis/094.jpg";
import villaLilak001 from "@/assets/villa-lilak/001.jpg";
import villaLilak044 from "@/assets/villa-lilak/044.jpg";
import villaLilak015 from "@/assets/villa-lilak/015.jpg";
import villaLilak018 from "@/assets/villa-lilak/018.jpg";
import villaLilak020 from "@/assets/villa-lilak/020.jpg";
import villaLilak034 from "@/assets/villa-lilak/034.jpg";
import dimitra014 from "@/assets/dimitra/014.jpg";
import dimitra077 from "@/assets/dimitra/077.jpg";
import agapiBedroom from "@/assets/agapi/ikyes-sonidos-bedroom.jpg.asset.json";
import agapiBedroom2 from "@/assets/agapi/ikyes-sonidos-bedroom-2.jpg.asset.json";
import agapiKitchen1 from "@/assets/agapi/ikyes-sonidos-kitchen-1.jpg.asset.json";
import agapiKitchen3 from "@/assets/agapi/ikyes-sonidos-kitchen-3.jpg.asset.json";
import agapiLivingRoom2 from "@/assets/agapi/ikyes-sonidos-living-room-2.jpg.asset.json";
import agapiLivingRoomAtNight from "@/assets/agapi/ikyes-sonidos-living-room-at-night.jpg.asset.json";
import atriaBathroom from "@/assets/atria/bathroom.jpg.asset.json";
import atriaBedroom from "@/assets/atria/bedroom.jpg.asset.json";
import atriaBedroomStaircase from "@/assets/atria/bedroom-staircase.jpg.asset.json";
import atriaKitchen from "@/assets/atria/kitchen-appliances.jpg.asset.json";
import atriaLivingNight from "@/assets/atria/living-room-night.jpg.asset.json";
import atriaLounge from "@/assets/atria/lounge.jpg.asset.json";
const atriaImages = [
  atriaLounge.url,
  atriaBedroom.url,
  atriaBedroomStaircase.url,
  atriaBathroom.url,
  atriaKitchen.url,
  atriaLivingNight.url,
];
import astivi6387 from "@/assets/astivi/0Z1A6387.jpg.asset.json";
import astivi6293 from "@/assets/astivi/0Z1A6293.jpg.asset.json";
import astivi6182 from "@/assets/astivi/0Z1A6182.jpg.asset.json";
import astivi6259 from "@/assets/astivi/0Z1A6259.jpg.asset.json";
import astivi6268 from "@/assets/astivi/0Z1A6268.jpg.asset.json";
import astivi6271 from "@/assets/astivi/0Z1A6271.jpg.asset.json";
import astivi6149 from "@/assets/astivi/0Z1A6149.jpg.asset.json";
import astivi6318 from "@/assets/astivi/0Z1A6318.jpg.asset.json";

const astiviImages = [
  astivi6387.url,
  astivi6293.url,
  astivi6182.url,
  astivi6259.url,
  astivi6268.url,
  astivi6271.url,
  astivi6149.url,
  astivi6318.url,
];

import vasiliki051 from "@/assets/vasiliki/051.jpg";
import vasiliki052 from "@/assets/vasiliki/052.jpg";
import vasiliki054 from "@/assets/vasiliki/054.jpg";
import vasiliki055 from "@/assets/vasiliki/055.jpg";
import vasiliki057 from "@/assets/vasiliki/057.jpg";
import vasiliki058 from "@/assets/vasiliki/058.jpg";
import vasiliki062 from "@/assets/vasiliki/062.jpg";

const vasilikiImages = [
  vasiliki054,
  vasiliki055,
  vasiliki052,
  vasiliki051,
  vasiliki062,
  vasiliki057,
  vasiliki058,
];

const dimitraImages = [dimitra014, dimitra077];

const agapiImages = [
  agapiBedroom.url,
  agapiBedroom2.url,
  agapiKitchen1.url,
  agapiKitchen3.url,
  agapiLivingRoom2.url,
  agapiLivingRoomAtNight.url,
];

const villaLilakImages = [
  villaLilak001,
  villaLilak044,
  villaLilak015,
  villaLilak018,
  villaLilak020,
  villaLilak034,
];

const alexandraImages = [
  alexandra027,
  alexandra028,
  alexandra029,
  alexandra0441,
  alexandra0471,
  alexandra039,
  alexandra042,
  alexandra031,
  alexandra032,
  alexandra037,
];

const aplotisImages = [
  aplotis002,
  aplotis005,
  aplotis010,
  aplotis027,
  aplotis038,
  aplotis039,
  aplotis067,
  aplotis076,
  aplotis081,
  aplotis094,
];

// Unsplash photos — replace with real assets later.
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "blue-house-vari",
    name: "Alexandra Suite - White Suites",
    area: "Ermoupoli",
    street: "Kapodistriou 24",
    maxGuests: 4,
    sizeSqm: 75,
    bedrooms: 2,
    bathrooms: 2,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.airbnb.com/",
    description: "A calm, light-filled home just steps from Vari beach. Blue House blends Cycladic simplicity with modern comfort — whitewashed walls, wooden shutters, and a shaded courtyard for slow mornings. The sea is your front yard.",
    images: alexandraImages,
    rates: { june: 180, july: 240, august: 280 },
  },
  {
    id: "olive-retreat-finikas",
    name: "APLOTIS",
    area: "Ermoupoli",
    street: "Lykourgou 10",
    maxGuests: 3,
    sizeSqm: 45,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.booking.com/",
    images: aplotisImages,
    rates: { june: 110, july: 150, august: 180 },
  },
  {
    id: "villa-lilak-galissas",
    name: "Villa Lilak",
    area: "Galissas",
    street: "Cavo fregada",
    maxGuests: 8,
    sizeSqm: 160,
    bedrooms: 4,
    bathrooms: 4,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: villaLilakImages,
    rates: { june: 420, july: 580, august: 680 },
  },
  {
    id: "dimitra-suite-white-suites",
    name: "Dimitra Suite - White Suites",
    area: "Ermoupoli",
    street: "Kapodistriou 24",
    maxGuests: 3,
    sizeSqm: 65,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.airbnb.com/",
    images: dimitraImages,
  },
  {
    id: "vasiliki-suite-white-suites",
    name: "Vasiliki Suite - White Suites",
    area: "Ermoupoli",
    street: "Kapodistriou 24",
    maxGuests: 2,
    sizeSqm: 35,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.airbnb.com/",
    images: vasilikiImages,
  },
  {
    id: "agapi-melo-residences",
    name: "Agapi - Melo Residences",
    area: "Ermoupoli",
    street: "Faidonos Koukoule 24",
    maxGuests: 3,
    sizeSqm: 50,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.airbnb.com/",
    images: agapiImages,
  },
  {
    id: "atria-melo-residences",
    name: "Atria - Melo Residences",
    area: "Ermoupoli",
    street: "Faidonos Koukoule 24",
    maxGuests: 3,
    sizeSqm: 60,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.airbnb.com/",
    images: atriaImages,
  },
  {
    id: "astivi-vari",
    name: "Astivi",
    area: "Vari",
    street: "Vari",
    maxGuests: 3,
    sizeSqm: 75,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: astiviImages,
  },
  {
    id: "alexandros-suite-avrofilito",
    name: "Alexandros Suite - Avrofilito Rooms",
    area: "Ermoupoli",
    street: "Sklipi",
    maxGuests: 6,
    sizeSqm: 130,
    bedrooms: 3,
    bathrooms: 2,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: [
      img("1564540583246-934409427776"),
      img("1600585154340-be6161a56a0c"),
      img("1600566753190-17f0baa2a6c3"),
    ],
  },
  {
    id: "avra-suite-avrofilito",
    name: "Avra Suite - Avrofilito Rooms",
    area: "Ermoupoli",
    street: "Sklipi",
    maxGuests: 5,
    sizeSqm: 100,
    bedrooms: 2,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: [
      img("1522708323590-d24dbb6b0267"),
      img("1560448204-e02f11c3d0e2"),
      img("1505693416388-ac5ce068fe85"),
    ],
  },
  {
    id: "elia-suite-avrofilito",
    name: "Elia Suite - Avrofilito Rooms",
    area: "Ermoupoli",
    street: "Sklipi",
    maxGuests: 2,
    sizeSqm: 35,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: [
      img("1571508601891-ca5e7a713859"),
      img("1568084680786-a84f91d1153c"),
      img("1540541338287-41700207dee6"),
    ],
  },
  {
    id: "lithia-suite-avrofilito",
    name: "Lithia Suite - Avrofilito Rooms",
    area: "Ermoupoli",
    street: "Sklipi",
    maxGuests: 2,
    sizeSqm: 35,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: [
      img("1499793983690-e29da59ef1c2"),
      img("1582268611958-ebfd161ef9cf"),
      img("1499696010180-025ef6e1a8f9"),
    ],
  },

];

export const areas = Array.from(new Set(properties.map((p) => p.area))).sort();
