export interface Plant {
  name: string;
  scientific_name: string;
  genus: string;
  type: string;
  description: string;
  light_requirements: string;
  watering_frequency: string;
  soil_type: string;
  bloom_season: string;
  mature_height: string;
  growth_rate: string;
  difficulty: string;
  ideal_temperature: string;
  toxicity: string;
  img_url: string;
}

const PlantData: Array<Plant> = [
  {
    name: "Sunflower",
    scientific_name: "Helianthus annuus",
    genus: "Helianthus",
    type: "Flower",
    description:
      "Sunflowers are large, bright, and cheerful annual plants known for their tall stems and striking yellow petals surrounding a seed-filled center.",
    light_requirements: "Full Sun (6–8 hours of direct sunlight per day)",
    watering_frequency: "2–3 times per week, depending on soil dryness",
    soil_type: "Well-draining, loamy soil rich in organic matter",
    bloom_season: "Summer to early fall",
    mature_height: "1.5 to 3.5 meters (5–12 feet)",
    growth_rate: "Fast",
    difficulty: "Easy",
    ideal_temperature: "21°C to 30°C (70°F to 86°F)",
    toxicity: "Non-toxic to humans and pets",
    img_url: "www.google.com",
  },
  {
    name: "Aloe Vera",
    scientific_name: "Aloe barbadensis miller",
    genus: "Aloe",
    type: "Succulent",
    description:
      "Aloe Vera is a hardy succulent known for its thick, fleshy leaves that contain a soothing gel used for burns and skin care.",
    light_requirements: "Bright, indirect sunlight or partial sun",
    watering_frequency:
      "Every 2–3 weeks; allow soil to dry completely between waterings",
    soil_type: "Sandy, well-draining soil",
    bloom_season: "Spring to summer",
    mature_height: "60 to 100 cm (2 to 3.3 feet)",
    growth_rate: "Moderate",
    difficulty: "Easy",
    ideal_temperature: "19°C to 29°C (66°F to 84°F)",
    toxicity: "Mildly toxic to pets if ingested",
    img_url: "www.google.com",
  },
  {
    name: "Lavender",
    scientific_name: "Lavandula angustifolia",
    genus: "Lavandula",
    type: "Herb",
    description:
      "Lavender is a fragrant herb valued for its soothing aroma and purple flowers, often used in aromatherapy and cooking.",
    light_requirements: "Full Sun",
    watering_frequency: "Once per week; more frequently in extreme heat",
    soil_type: "Well-draining, sandy or gravelly soil",
    bloom_season: "Late spring to early summer",
    mature_height: "30 to 90 cm (1 to 3 feet)",
    growth_rate: "Moderate",
    difficulty: "Moderate",
    ideal_temperature: "18°C to 27°C (65°F to 80°F)",
    toxicity: "Non-toxic to humans, mildly toxic to pets",
    img_url: "www.google.com",
  },
  {
    name: "Peace Lily",
    scientific_name: "Spathiphyllum wallisii",
    genus: "Spathiphyllum",
    type: "Houseplant",
    description:
      "Peace Lilies are elegant indoor plants with glossy green leaves and white blooms, known for air-purifying properties.",
    light_requirements: "Low to bright indirect light",
    watering_frequency: "Once per week; keep soil slightly moist",
    soil_type: "Rich, well-draining potting mix",
    bloom_season: "Spring and occasionally throughout the year",
    mature_height: "60 to 90 cm (2 to 3 feet)",
    growth_rate: "Moderate",
    difficulty: "Easy",
    ideal_temperature: "18°C to 27°C (65°F to 80°F)",
    toxicity: "Toxic to pets and humans if ingested",
    img_url: "www.google.com",
  },
  {
    name: "Snake Plant",
    scientific_name: "Sansevieria trifasciata",
    genus: "Sansevieria",
    type: "Houseplant",
    description:
      "Snake Plants are hardy and low-maintenance with upright, sword-like leaves, ideal for beginners.",
    light_requirements: "Low to bright indirect light",
    watering_frequency: "Every 2–3 weeks",
    soil_type: "Well-draining, sandy soil",
    bloom_season: "Rarely blooms indoors",
    mature_height: "30 cm to 1.2 meters (1 to 4 feet)",
    growth_rate: "Slow to moderate",
    difficulty: "Very easy",
    ideal_temperature: "15°C to 29°C (60°F to 85°F)",
    toxicity: "Toxic to pets if ingested",
    img_url: "www.google.com",
  },
  {
    name: "Tomato",
    scientific_name: "Solanum lycopersicum",
    genus: "Solanum",
    type: "Vegetable",
    description:
      "Tomato plants are popular garden vegetables producing red, juicy fruits rich in vitamins and antioxidants.",
    light_requirements: "Full Sun",
    watering_frequency: "2–3 times per week or as needed",
    soil_type: "Loamy, well-draining, fertile soil",
    bloom_season: "Late spring to summer",
    mature_height: "90 cm to 2 meters (3 to 6.5 feet)",
    growth_rate: "Fast",
    difficulty: "Moderate",
    ideal_temperature: "20°C to 27°C (68°F to 81°F)",
    toxicity: "Leaves and stems are toxic if ingested",
    img_url: "www.google.com",
  },
  {
    name: "Basil",
    scientific_name: "Ocimum basilicum",
    genus: "Ocimum",
    type: "Herb",
    description:
      "Basil is a fragrant herb commonly used in cooking, especially in Italian and Southeast Asian dishes.",
    light_requirements: "Full Sun",
    watering_frequency: "Every 2–3 days; keep soil moist but not soggy",
    soil_type: "Moist, well-draining soil rich in organic matter",
    bloom_season: "Summer",
    mature_height: "30 to 60 cm (1 to 2 feet)",
    growth_rate: "Fast",
    difficulty: "Easy",
    ideal_temperature: "21°C to 26°C (70°F to 79°F)",
    toxicity: "Non-toxic to humans and pets",
    img_url: "www.google.com",
  },
  {
    name: "Cactus",
    scientific_name: "Echinocactus grusonii",
    genus: "Echinocactus",
    type: "Succulent",
    description:
      "Cacti are desert plants known for their ability to store water, often spiny and highly drought-tolerant.",
    light_requirements: "Full Sun",
    watering_frequency: "Once every 3–4 weeks",
    soil_type: "Sandy, fast-draining cactus mix",
    bloom_season: "Spring to summer (varies by species)",
    mature_height: "15 cm to 1.5 meters (6 inches to 5 feet)",
    growth_rate: "Slow",
    difficulty: "Easy",
    ideal_temperature: "21°C to 32°C (70°F to 90°F)",
    toxicity: "Non-toxic, but physical spines can be hazardous",
    img_url: "www.google.com",
  },
  {
    name: "Rose",
    scientific_name: "Rosa spp",
    genus: "Rosa",
    type: "Flower",
    description:
      "Roses are classic flowering shrubs known for their beauty, fragrance, and symbolic meanings.",
    light_requirements: "Full Sun",
    watering_frequency: "Once or twice per week, depending on weather",
    soil_type: "Well-drained, fertile loam",
    bloom_season: "Late spring to fall",
    mature_height: "30 cm to 2 meters (1 to 6.5 feet)",
    growth_rate: "Moderate",
    difficulty: "Moderate",
    ideal_temperature: "16°C to 26°C (60°F to 79°F)",
    toxicity: "Non-toxic, but thorns can cause injury",
    img_url: "www.google.com",
  },
  {
    name: "Spider Plant",
    scientific_name: "Chlorophytum comosum",
    genus: "Chlorophytum",
    type: "Houseplant",
    description:
      "Spider Plants are popular indoor plants known for their arching leaves and baby plantlets that dangle like spiders.",
    light_requirements: "Bright, indirect light",
    watering_frequency:
      "Once per week; allow soil to dry slightly between waterings",
    soil_type: "Well-draining potting mix",
    bloom_season: "Occasionally year-round indoors",
    mature_height: "30 to 45 cm (1 to 1.5 feet)",
    growth_rate: "Fast",
    difficulty: "Very easy",
    ideal_temperature: "18°C to 27°C (65°F to 80°F)",
    toxicity: "Non-toxic to humans and pets",
    img_url: "www.google.com",
  },
];

export default PlantData;
