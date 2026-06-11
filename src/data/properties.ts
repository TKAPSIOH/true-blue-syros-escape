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
import agapi100 from "@/assets/agapi-new/100.jpg.asset.json";
import agapi5 from "@/assets/agapi-new/009_5.jpg.asset.json";
import agapi6 from "@/assets/agapi-new/009_6.jpg.asset.json";
import agapi7 from "@/assets/agapi-new/009_7.jpg.asset.json";
import agapi10 from "@/assets/agapi-new/009_10.jpg.asset.json";
import agapi12 from "@/assets/agapi-new/009_12.jpg.asset.json";
import agapi13 from "@/assets/agapi-new/009_13.jpg.asset.json";
import atria1 from "@/assets/atria-new/010_1.jpg.asset.json";
import atria2 from "@/assets/atria-new/010_2.jpg.asset.json";
import atria3 from "@/assets/atria-new/010_3.jpg.asset.json";
import atria9 from "@/assets/atria-new/010_9.jpg.asset.json";
import atria10 from "@/assets/atria-new/010_10.jpg.asset.json";
import atria12 from "@/assets/atria-new/010_12.jpg.asset.json";
import atria15 from "@/assets/atria-new/010_15.jpg.asset.json";
const atriaImages = [
  atria3.url,
  atria10.url,
  atria12.url,
  atria9.url,
  atria1.url,
  atria2.url,
  atria15.url,
];
import eliaView from "@/assets/elia-new/001_1.jpg.asset.json";
import eliaBedroom from "@/assets/elia-new/001_2.jpg.asset.json";
import eliaBathroom from "@/assets/elia-new/001_3.jpg.asset.json";
import eliaLiving from "@/assets/elia-new/001_4.jpg.asset.json";
import eliaTerrace from "@/assets/elia-new/006_2.jpg.asset.json";
import eliaNight from "@/assets/elia-new/007_7.jpg.asset.json";
import elia24 from "@/assets/elia-new/003_24.jpg.asset.json";
import elia25 from "@/assets/elia-new/003_25.jpg.asset.json";
const eliaImages = [eliaView.url, eliaBedroom.url, eliaBathroom.url, eliaLiving.url, eliaTerrace.url, eliaNight.url, elia24.url, elia25.url];
import astivi4 from "@/assets/astivi-new/011_4.jpg.asset.json";
import astivi6 from "@/assets/astivi-new/011_6.jpg.asset.json";
import astivi9 from "@/assets/astivi-new/011_9.jpg.asset.json";
import astivi10 from "@/assets/astivi-new/011_10.jpg.asset.json";
import astivi18 from "@/assets/astivi-new/011_18.jpg.asset.json";
import astivi19 from "@/assets/astivi-new/011_19.jpg.asset.json";
import astivi26 from "@/assets/astivi-new/011_26.jpg.asset.json";
import astivi35 from "@/assets/astivi-new/011_35.jpg.asset.json";
import astivi43 from "@/assets/astivi-new/011_43.jpg.asset.json";
import astivi45 from "@/assets/astivi-new/011_45.jpg.asset.json";

const astiviImages = [
  astivi43.url,
  astivi6.url,
  astivi45.url,
  astivi10.url,
  astivi18.url,
  astivi9.url,
  astivi19.url,
  astivi35.url,
  astivi26.url,
  astivi4.url,
];

import alexandros3 from "@/assets/alexandros-new/012_3.jpg.asset.json";
import alexandros5 from "@/assets/alexandros-new/012_5.jpg.asset.json";
import alexandros6n from "@/assets/alexandros-new/012_6.jpg.asset.json";
import alexandros9 from "@/assets/alexandros-new/012_9.jpg.asset.json";
import alexandros10 from "@/assets/alexandros-new/012_10.jpg.asset.json";
import alexandros11 from "@/assets/alexandros-new/012_11.jpg.asset.json";
import alexandros13 from "@/assets/alexandros-new/012_13.jpg.asset.json";
const alexandrosImages = [
  alexandros13.url,
  alexandros3.url,
  alexandros5.url,
  alexandros6n.url,
  alexandros11.url,
  alexandros9.url,
  alexandros10.url,
];
import lithia1 from "@/assets/lithia-new/004_1.jpg.asset.json";
import lithia2 from "@/assets/lithia-new/004_2.jpg.asset.json";
import lithia4 from "@/assets/lithia-new/004_4.jpg.asset.json";
import lithia5 from "@/assets/lithia-new/004_5.jpg.asset.json";
import lithia6 from "@/assets/lithia-new/004_6.jpg.asset.json";
import lithia26 from "@/assets/lithia-new/003_26.jpg.asset.json";
import lithia30 from "@/assets/lithia-new/003_30.jpg.asset.json";
const lithiaImages = [
  lithia6.url,
  lithia5.url,
  lithia1.url,
  lithia2.url,
  lithia4.url,
  lithia26.url,
  lithia30.url,
];

import avra1 from "@/assets/avra-new/002_1.jpg.asset.json";
import avra2 from "@/assets/avra-new/002_2.jpg.asset.json";
import avra3 from "@/assets/avra-new/002_3.jpg.asset.json";
import avra5 from "@/assets/avra-new/002_5.jpg.asset.json";
import avra6 from "@/assets/avra-new/002_6.jpg.asset.json";
import avra9 from "@/assets/avra-new/002_9.jpg.asset.json";
import avra20 from "@/assets/avra-new/003_20.jpg.asset.json";
import avra24 from "@/assets/avra-new/003_24.jpg.asset.json";
const avraImages = [
  avra1.url,
  avra6.url,
  avra3.url,
  avra2.url,
  avra5.url,
  avra9.url,
  avra20.url,
  avra24.url,
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


const agapiImages = [agapi100.url, agapi6.url, agapi5.url, agapi7.url, agapi13.url, agapi12.url, agapi10.url];

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
    description: "A calm, light-filled home just steps from Ermoupoli town center. White Suites blend Cycladic simplicity with modern comfort. ",
    images: alexandraImages,
    rates: { june: 170, july: 250, august: 320 },
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
    rates: { june: 140, july: 180, august: 220 },
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
    rates: { june: 80, july: 1000, august: 1200 },
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
    rates: { june: 120, july: 160, august: 190 },
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
    rates: { june: 140, july: 170, august: 200 },
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
    rates: { june: 150, july: 195, august: 230 },
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
    rates: { june: 170, july: 190, august: 230 },
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
    images: alexandrosImages,
    rates: { june: 240, july: 280, august: 320 },
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
    images: avraImages,
    rates: { june: 240, july: 270, august: 300 },
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
    images: eliaImages,
    rates: { june: 140, july: 180, august: 220 },
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
    images: lithiaImages,
    rates: { june: 140, july: 180, august: 220 },
  },

];

export const areas = Array.from(new Set(properties.map((p) => p.area))).sort();
