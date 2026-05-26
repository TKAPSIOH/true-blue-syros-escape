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
};

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
    images: [
      img("1613490493576-7fde63acd811"),
      img("1505691938895-1758d7feb511"),
      img("1502672260266-1c1ef2d93688"),
    ],
  },
  {
    id: "olive-retreat-finikas",
    name: "Olive Retreat",
    area: "Finikas",
    street: "Odos Eleon 4",
    maxGuests: 4,
    sizeSqm: 85,
    bedrooms: 2,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.booking.com/",
    images: [
      img("1512917774080-9991f1c4c750"),
      img("1501183638710-841dd1904471"),
      img("1493809842364-78817add7ffb"),
    ],
  },
  {
    id: "cycladic-cottage-chroussa",
    name: "Cycladic Cottage",
    area: "Chroussa",
    street: "Anemou 8",
    maxGuests: 5,
    sizeSqm: 95,
    bedrooms: 2,
    bathrooms: 2,
    amenities: { wifi: true, ac: false, parking: true },
    bookingUrl: "https://www.airbnb.com/",
    images: [
      img("1564540583246-934409427776"),
      img("1600585154340-be6161a56a0c"),
      img("1600566753190-17f0baa2a6c3"),
    ],
  },
  {
    id: "marble-loft-ermoupoli",
    name: "Marble Loft",
    area: "Ermoupoli",
    street: "Andrea Karga 22",
    maxGuests: 3,
    sizeSqm: 70,
    bedrooms: 1,
    bathrooms: 1,
    amenities: { wifi: true, ac: true, parking: false },
    bookingUrl: "https://www.airbnb.com/",
    images: [
      img("1522708323590-d24dbb6b0267"),
      img("1560448204-e02f11c3d0e2"),
      img("1505693416388-ac5ce068fe85"),
    ],
  },
  {
    id: "captain-house-ermoupoli",
    name: "Captain's House",
    area: "Ermoupoli",
    street: "Plateia Miaouli 3",
    maxGuests: 8,
    sizeSqm: 180,
    bedrooms: 4,
    bathrooms: 3,
    amenities: { wifi: true, ac: true, parking: true },
    bookingUrl: "https://www.booking.com/",
    images: [
      img("1571508601891-ca5e7a713859"),
      img("1568084680786-a84f91d1153c"),
      img("1540541338287-41700207dee6"),
    ],
  },
  {
    id: "sea-breeze-vari",
    name: "Sea Breeze",
    area: "Vari",
    street: "Paralia Vari 7",
    maxGuests: 4,
    sizeSqm: 78,
    bedrooms: 2,
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
