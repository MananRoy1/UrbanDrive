export interface CarSpec {
  icon: string;
  label: string;
}

export interface Car {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  imageAlt: string;
  thumbnails: { src: string; alt: string }[];
  badge?: {
    label: string;
    color: string;
    textColor?: string;
  };
  specs: CarSpec[];
  // Detail page specific
  detailStats: { icon: string; label: string; value: string }[];
  description: string;
  features: string[];
  fuelType: string;
}

export const cars: Car[] = [
  {
    id: "tesla-model-3",
    name: "Tesla Model 3",
    subtitle: "Long Range Dual Motor",
    type: "Electric Sedan",
    price: 85,
    rating: 4.9,
    reviews: 128,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSqcgzcAZghMxlhaPfaLv4H-i9Zg_PEmC_ivIusW6S2WGx3m1lC7Fxq--ewCM3kdGeihgzk9YDpbd7lkeeKnISfqttlOMDUNYgpNnlg75Uv6b0cuo3m-wicAJ6RvWWdfZOm0MMrebVZr77IEEVTEjiwRywDrpnSPLnrPjORmHMKPvo7XM1dQZ3GIJaqb-i8d78HeuH8rxpx-sQVXwRn76VCjEHY9opogOZvehYjP1rpCRnu67eXkgLWZKr5_5TalVwC0tPIBtn-vBZ",
    imageAlt: "Side profile of a sleek white Tesla Model 3",
    thumbnails: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaEUn09sqboUO80WC-FP11wBprG_NBZQ7sGqQ4LdL1htk_VVDMaisT_rKr0OzGspZX6QdFoIJnnqjfpdk1axZDk650HMz3oS6_iNr-CxWk4TemBHuDjiCtNlt0EN8i9dVlsR3SBOkUvPEc4EcyksYygvzUdJuc4JgwxFuauU4vYMmLHIjrMpBRM2Gy0_VqzBmpu5zRY-s4Via9BEs12JukdtYrdqCwuAWhxhfT1mffHA1GhSfHG4R0imIGz-74NlPF_T_qhB3LWP-x",
        alt: "Tesla side view",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWsF8YVCWXplrzF3nPKhAwLKvdlZh55WthrJi-5Sx56UUjqX3gaSpC7MbuM2bIsRoS456GEsCqhdggxVkHTNBrsWZhGe7SgAmy8oGFSh7WRN9jRN1fYRTVs576qLUFUkl_AmJJIySEwCcVxjWfxvLH0nSJ9yoz-2eVFmGEcrxotQoM7elJqXt4ZFiA3hYq6P9wsozglxVqDDXuQqP5t73R22iM-n42RKZENGvF0ErHt9VDa6cv6rJpaGz5wWEFWoujkFE3DRS9xzh8",
        alt: "Tesla interior dashboard",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA9RgXe6IIzg6Gt4Xnvmp_0YEMXOtHuRDur_sIqkbOhSSphHTLY0ARhprVD3EVD1AL9I0kjGzQXH-POv1Jw96hSaflEWFgWW7rgOEuKM4911NmRT6-T9JFEWRetDlnLmtPdXKdrd5G0y89BLGNHXd9Lk1B63iWqJtvoWiWxMQM6LFOtn-WyY4f61_qFlFK5p1hrdAWA30yIjLp-9FYP2docX5CAEsqxGel88tRl8p_VMshdL6ibk1Osjg6SRQXUonG66TSP9gLwvGQ",
        alt: "Tesla charging port",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvMA6pO9dRP6am3o13moqQnJoZQDSRtaYOJQ0yidKIG9cozqfIG13iTIs5g5lg_sXtHNoQIp1q4QUFHzEgMos42GUx7qHUvAGNPxW3-uxpHU4-jL0CvDgajmSrmcfCk0BiqC1WbtY80JG3fxWUDzRuV2vRPHDlsD_Q4LrT4d8F9DOjjPzdBu7UlbZwd1IxRQUmth2DPJovU3OOUG_hA9BB97YXIaoLqsKk5GX8yxRffvnLoGIsMNNlhwcIPFSSt-fy0TYdmhByZtT1",
        alt: "Tesla rear view",
      },
    ],
    badge: {
      label: "Top Rated",
      color: "bg-[#fea90b]",
      textColor: "text-slate-900",
    },
    specs: [
      { icon: "airline_seat_recline_normal", label: "5 Seats" },
      { icon: "settings", label: "Auto" },
      { icon: "electric_bolt", label: "Electric" },
    ],
    detailStats: [
      { icon: "speed", label: "0-60 mph", value: "3.1s" },
      {
        icon: "airline_seat_recline_normal",
        label: "Seats",
        value: "5 Adults",
      },
      { icon: "battery_charging_full", label: "Range", value: "358 mi" },
      { icon: "auto_transmission", label: "Gear", value: "Auto" },
    ],
    description:
      "Experience the future of driving with the Model 3. Perfect for city commutes and weekend getaways, this electric vehicle combines performance, safety, and technology. Enjoy the minimalistic interior, glass roof, and autopilot features. The Long Range battery ensures you can explore Los Angeles and beyond without range anxiety.",
    features: ["GPS Navigation", "Bluetooth", "Heated Seats", "Autopilot"],
    fuelType: "Electric",
  },
  {
    id: "range-rover-evoque",
    name: "Range Rover Evoque",
    subtitle: "P250 S AWD",
    type: "Luxury SUV",
    price: 110,
    rating: 4.8,
    reviews: 84,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqDIoxwYTa4mhn58esyqJmYMPOsneWh9IYQVV5SdOQwKhlWoKQJ3djyOP8EHrV-BsPFGTLELsXMCv8QyexvMwLWijZmG0oAgRJ8mom3DxV4mwJqVcDjJe8cvXV6aOBsJ_8NDLyVnplSeUaAYFUldd2GVdny8WtFnc4D9Pt6hmTAZpa8e8q590A4Wjj1X95k1d70pB0PQnLemRUz8PEHSe5QoO6E6dnkK86S_kLKRHNBH4siDXEHP7fJQJFAQk2PJzAAdo0CVyQ7219",
    imageAlt: "White Range Rover Evoque front angle",
    thumbnails: [
      {
        src: "https://imgd.aeplcdn.com/664x374/n/cw/ec/37721/range-rover-evoque-exterior-right-front-three-quarter-2.png?isig=0&q=80",
        alt: "Range Rover front",
      },
    ],
    specs: [
      { icon: "airline_seat_recline_normal", label: "5 Seats" },
      { icon: "settings", label: "Auto" },
      { icon: "local_gas_station", label: "Petrol" },
    ],
    detailStats: [
      { icon: "speed", label: "0-60 mph", value: "6.3s" },
      {
        icon: "airline_seat_recline_normal",
        label: "Seats",
        value: "5 Adults",
      },
      { icon: "local_gas_station", label: "Fuel", value: "Petrol" },
      { icon: "auto_transmission", label: "Gear", value: "Auto" },
    ],
    description:
      "The Range Rover Evoque blends iconic design with remarkable capability. Premium materials, cutting-edge technology, and a refined driving experience make it perfect for city adventures and weekend escapes alike.",
    features: ["Panoramic Roof", "Heated Seats", "Meridian Audio", "4WD"],
    fuelType: "Petrol",
  },
  {
    id: "mini-cooper-se",
    name: "MINI Cooper SE",
    subtitle: "Electric Hatchback",
    type: "Compact Hatchback",
    price: 75,
    rating: 4.7,
    reviews: 56,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdmX4uls8S0sa2mJ7XY4PEqS-wAtYPr_78OMmI7fP-XYfYFJRoLejBbeaIvMEDRs3BcH3KNpZgn7CfKyWqfN_5YOE1v6VWveujRPG9tAuvkSTviue_kkzZn7v5taw1JIOrqlPJawhFjak0zD-6iMXhh--c7NNGyrY2pngu1EW6Xz0NAcfE1VqiZEOvS2HN7Yo_x7HmraLnS7S4XiV9jOSKRwe8eCk1OG9rMiGVDMpGAMZG3zPSpC0FT59fHHfLYPjz2Ij-ZyCNW0xE",
    imageAlt: "Blue MINI Cooper SE side view",
    thumbnails: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdmX4uls8S0sa2mJ7XY4PEqS-wAtYPr_78OMmI7fP-XYfYFJRoLejBbeaIvMEDRs3BcH3KNpZgn7CfKyWqfN_5YOE1v6VWveujRPG9tAuvkSTviue_kkzZn7v5taw1JIOrqlPJawhFjak0zD-6iMXhh--c7NNGyrY2pngu1EW6Xz0NAcfE1VqiZEOvS2HN7Yo_x7HmraLnS7S4XiV9jOSKRwe8eCk1OG9rMiGVDMpGAMZG3zPSpC0FT59fHHfLYPjz2Ij-ZyCNW0xE",
        alt: "MINI Cooper side",
      },
    ],
    badge: {
      label: "Eco Friendly",
      color: "bg-emerald-500",
      textColor: "text-white",
    },
    specs: [
      { icon: "airline_seat_recline_normal", label: "4 Seats" },
      { icon: "settings", label: "Auto" },
      { icon: "electric_bolt", label: "Electric" },
    ],
    detailStats: [
      { icon: "speed", label: "0-60 mph", value: "7.3s" },
      {
        icon: "airline_seat_recline_normal",
        label: "Seats",
        value: "4 Adults",
      },
      { icon: "battery_charging_full", label: "Range", value: "114 mi" },
      { icon: "auto_transmission", label: "Gear", value: "Auto" },
    ],
    description:
      "The MINI Cooper SE is the perfect eco-friendly city car. Zippy, stylish, and emission-free, it's ideal for urban exploration. Park anywhere, charge anywhere, and enjoy the iconic MINI go-kart feel.",
    features: [
      "Navigation",
      "Wireless Charging",
      "Parking Sensors",
      "LED Lights",
    ],
    fuelType: "Electric",
  },
  {
    id: "bmw-3-series",
    name: "BMW 3 Series",
    subtitle: "330i Sport Line",
    type: "Luxury Sedan",
    price: 95,
    rating: 4.8,
    reviews: 92,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XvN55fERvKONW0K3PP4vrLFEzZzOy3o6v3GCwxrzbMgG2cKPB4QT2kOt6B65e0e45xz5MQeIiB_uWVLirpsXw_QeRHtfYHkDhKGEou5gMPf1NaeBGxL53kPn1yKcmPa848GKKL52IwbC3bhrZ2d7xhFJXEQaTm-kAMSpCHj1cgTWNRQnnAkEXPm__AU9aMnIiFxSlgj59nntd269_ivtTnIdKbYsEHL4Z8M8LqYqci2t-lizDVyMZ9eoLzQ6sJqoGq8zJpZnDs0T",
    imageAlt: "White BMW 3 Series front view",
    thumbnails: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XvN55fERvKONW0K3PP4vrLFEzZzOy3o6v3GCwxrzbMgG2cKPB4QT2kOt6B65e0e45xz5MQeIiB_uWVLirpsXw_QeRHtfYHkDhKGEou5gMPf1NaeBGxL53kPn1yKcmPa848GKKL52IwbC3bhrZ2d7xhFJXEQaTm-kAMSpCHj1cgTWNRQnnAkEXPm__AU9aMnIiFxSlgj59nntd269_ivtTnIdKbYsEHL4Z8M8LqYqci2t-lizDVyMZ9eoLzQ6sJqoGq8zJpZnDs0T",
        alt: "BMW 3 Series front",
      },
    ],
    specs: [
      { icon: "airline_seat_recline_normal", label: "5 Seats" },
      { icon: "settings", label: "Auto" },
      { icon: "local_gas_station", label: "Hybrid" },
    ],
    detailStats: [
      { icon: "speed", label: "0-60 mph", value: "5.6s" },
      {
        icon: "airline_seat_recline_normal",
        label: "Seats",
        value: "5 Adults",
      },
      { icon: "local_gas_station", label: "Fuel", value: "Hybrid" },
      { icon: "auto_transmission", label: "Gear", value: "Auto" },
    ],
    description:
      "The BMW 3 Series is the benchmark for sports sedans. With its dynamic handling, premium interior, and cutting-edge technology, it delivers a driving experience unlike any other in its class.",
    features: [
      "iDrive System",
      "Heated Seats",
      "Harman Kardon Audio",
      "Adaptive Cruise",
    ],
    fuelType: "Hybrid",
  },
  {
    id: "audi-q8",
    name: "Audi Q8",
    subtitle: "55 TFSI quattro",
    type: "Premium SUV",
    price: 145,
    rating: 4.9,
    reviews: 34,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt9u-cz3WSTqHjP-dzt4dNEh0CX6xE-2VOZ-FOR_zouDP4FdV4a7xQ87P4nc8Z4kJoQx5PpocDu33iBzzBVrNRnku_spNW5SVOGNAIOgxsGPMPGBjBUbVq8jsFQrW9VGa-aqGsWAZIWeqGq2zLpmCjbmkPrA9HgpIx7m1tQtufATAW8k0rAKdP0lReAdX5ou4ZgiTP0uCMvCGQJHabiAG-PdmcHmuLXuiMQ5LWR6ePoz3tV1UZy8eesqqfFS03H4B5aQwVob-xDYQ",
    imageAlt: "Red Audi Q8 SUV on road",
    thumbnails: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt9u-cz3WSTqHjP-dzt4dNEh0CX6xE-2VOZ-FOR_zouDP4FdV4a7xQ87P4nc8Z4kJoQx5PpocDu33iBzzBVrNRnku_spNW5SVOGNAIOgxsGPMPGBjBUbVq8jsFQrW9VGa-aqGsWAZIWeqGq2zLpmCjbmkPrA9HgpIx7m1tQtufATAW8k0rAKdP0lReAdX5ou4ZgiTP0uCMvCGQJHabiAG-PdmcHmuLXuiMQ5LWR6ePoz3tV1UZy8eesqqfFS03H4B5aQwVob-xDYQ",
        alt: "Audi Q8 side",
      },
    ],
    specs: [
      { icon: "airline_seat_recline_normal", label: "5 Seats" },
      { icon: "settings", label: "Auto" },
      { icon: "local_gas_station", label: "Petrol" },
    ],
    detailStats: [
      { icon: "speed", label: "0-60 mph", value: "5.6s" },
      {
        icon: "airline_seat_recline_normal",
        label: "Seats",
        value: "5 Adults",
      },
      { icon: "local_gas_station", label: "Fuel", value: "Petrol" },
      { icon: "auto_transmission", label: "Gear", value: "Auto" },
    ],
    description:
      "The Audi Q8 is a flagship SUV that commands attention. With a bold design, luxurious interior, and powerful engine, it's the ultimate statement of prestige and performance.",
    features: [
      "Virtual Cockpit",
      "Bang & Olufsen Audio",
      "Matrix LED",
      "Massage Seats",
    ],
    fuelType: "Petrol",
  },
  {
    id: "ford-mustang",
    name: "Ford Mustang",
    subtitle: "GT Convertible",
    type: "Convertible",
    price: 105,
    rating: 4.6,
    reviews: 210,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHB3OWcRtaGVLD4KqSjO9fCluiwo4BJCtuyPDWMt57brwMK6PgB_PuXbEVqVZWOH-Yevk2SIG4dfJvwtfW6Aqp0VBKi2amp_y62u8j9whFMeIGeBXklf7RE8SBaxU1Qh3uAY9NRkVclsSS0mF4_Zt30oyTGv06eYDD3Lgxa3784ojdmrsteBtJXEz-z2bxSWXLXkyGdVji9BhOV6776YA-ucVbtdEKBbFUIV0rewXHjbhnQEhmwAvPUz9fDYZFE_c41HUpfQtkp9oh",
    imageAlt: "Black Ford Mustang convertible",
    thumbnails: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHB3OWcRtaGVLD4KqSjO9fCluiwo4BJCtuyPDWMt57brwMK6PgB_PuXbEVqVZWOH-Yevk2SIG4dfJvwtfW6Aqp0VBKi2amp_y62u8j9whFMeIGeBXklf7RE8SBaxU1Qh3uAY9NRkVclsSS0mF4_Zt30oyTGv06eYDD3Lgxa3784ojdmrsteBtJXEz-z2bxSWXLXkyGdVji9BhOV6776YA-ucVbtdEKBbFUIV0rewXHjbhnQEhmwAvPUz9fDYZFE_c41HUpfQtkp9oh",
        alt: "Mustang side",
      },
    ],
    badge: {
      label: "Great Deal",
      color: "bg-orange-600",
      textColor: "text-white",
    },
    specs: [
      { icon: "airline_seat_recline_normal", label: "4 Seats" },
      { icon: "settings", label: "Manual" },
      { icon: "local_gas_station", label: "Petrol" },
    ],
    detailStats: [
      { icon: "speed", label: "0-60 mph", value: "4.8s" },
      {
        icon: "airline_seat_recline_normal",
        label: "Seats",
        value: "4 Adults",
      },
      { icon: "local_gas_station", label: "Fuel", value: "Petrol" },
      { icon: "auto_transmission", label: "Gear", value: "Manual" },
    ],
    description:
      "Feel the raw power of an American icon. The Ford Mustang GT Convertible delivers thrilling performance, open-air freedom, and head-turning style. Drop the top and let the V8 roar.",
    features: [
      "V8 Engine",
      "SYNC 4 Infotainment",
      "Convertible Roof",
      "Launch Control",
    ],
    fuelType: "Petrol",
  },
];

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id);
}
