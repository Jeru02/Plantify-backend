# Plantify API Documentation

Welcome to the Plantify API! This RESTful API provides data on various plants, their properties, weather data, quiz content, and user interactions such as liking plants.

---

# Endpoints Overview

# GET REQUESTS

### GET /api/plants

**Description:** Returns an array of all plants.

**Queries:** n/a

**Example Response:**

[
{
name: Sunflower,
scientific_name: Helianthus annuus,
genus: Helianthus,
type: Flower,
description: "Sunflowers are large, bright, and cheerful annual plants known for their tall stems and striking yellow petals surrounding a seed-filled center.",
light_requirements: "Full Sun (6–8 hours of direct sunlight per day)",
watering_frequency: "2–3 times per week, depending on soil dryness",
soil_type: "Well-draining, loamy soil rich in organic matter",
bloom_season: "Summer to early fall",
mature_height: "1.5 to 3.5 meters (5–12 feet)",
growth_rate: Fast,
difficulty: Easy,
ideal_temperature: "21°C to 30°C (70°F to 86°F)",
toxicity: "Non-toxic to humans and pets",
img_url: www.google.com
},
{
name: Aloe Vera,
scientific_name: Aloe barbadensis miller,
genus: Aloe,
type: Succulent,
description: "Aloe Vera is a hardy succulent known for its thick, fleshy leaves that contain a soothing gel used for burns and skin care.",
light_requirements: "Bright, indirect sunlight or partial sun",
watering_frequency: "Every 2–3 weeks; allow soil to dry completely between waterings",
soil_type: "Sandy, well-draining soil",
bloom_season: "Spring to summer",
mature_height: "60 to 100 cm (2 to 3.3 feet)",
growth_rate: Moderate,
difficulty: Easy,
ideal_temperature: "19°C to 29°C (66°F to 84°F)",
toxicity: "Mildly toxic to pets if ingested",
img_url: www.google.com
}
]

### GET /api/plants/:plant_id

**Description:** Returns a single plant by `plant_id`.

**Queries:** name = Lavender

**Example Response:**

{
plant_id: 3,
name: Lavender,
scientific_name: Lavandula angustifolia,
genus: Lavandula,
type: Herb,
description: "Lavender is a fragrant herb valued for its soothing aroma and purple flowers, often used in aromatherapy and cooking.",
light_requirements: Full Sun,
watering_frequency: "Once per week; more frequently in extreme heat",
soil_type: "Well-draining, sandy or gravelly soil",
bloom_season: "Late spring to early summer",
mature_height: "30 to 90 cm (1 to 3 feet)",
growth_rate: Moderate,
difficulty: Moderate,
ideal_temperature: "18°C to 27°C (65°F to 80°F)",
toxicity: "Non-toxic to humans, mildly toxic to pets",
img_url: www.google.com
}

### GET /api/genus/:genus

**Description:** Returns plants that belong to the specified genus.

**Queries:** n/a

**Example Response:**

{
plant_id: 1,
name: Sunflower,
scientific_name: Helianthus annuus,
genus: Helianthus,
type: Flower,
description: "Sunflowers are large, bright, and cheerful annual plants known for their tall stems and striking yellow petals surrounding a seed-filled center.",
light_requirements: "Full Sun (6–8 hours of direct sunlight per day)",
watering_frequency: "2–3 times per week, depending on soil dryness",
soil_type: "Well-draining, loamy soil rich in organic matter",
bloom_season: "Summer to early fall",
mature_height: "1.5 to 3.5 meters (5–12 feet)",
growth_rate: Fast,
difficulty: Easy,
ideal_temperature: "21°C to 30°C (70°F to 86°F)",
toxicity: "Non-toxic to humans and pets",
img_url: www.google.com
}

### GET /api/quiz/:question_id

**Description:** Returns a quiz question and answer.

**Example Response:**

{
question_id: 1,
question: What do plants need to perform photosynthesis?,
answer: Sunlight, water, and carbon dioxide
}

### GET /api/currentWeather

**Description:** Returns current weather data.

**Example Response:**

{
maxtemp_c: 28.4,
mintemp_c: 18.2,
avgtemp_f: 73.9,
condition:
{
text: Partly cloudy,
icon: //cdn.weatherapi.com/weather/64x64/day/116.png
},
uv: 6
}

### GET /api/plant_name

**Description:** Returns the plant name based on an image URL.

**Example Response:**

{
score: 92.5,
species:
{
scientificName: Ficus lyrata,
commonName: Fiddle Leaf Fig,
family: Moraceae
},
images:
[
https://example.com/images/ficus1.jpg,
https://example.com/images/ficus2.jpg
],
gbif: https://www.gbif.org/species/1234567,
powo: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:12345-1,
iucn: https://www.iucnredlist.org/species/123456/7891011
}

### GET /api/ourPlantMatch

**Description:** Returns a match in our database based on genus.

**Queries:** genus = Lavandula

**Example Response:**

{
name: "Lavender",
scientific_name: "Lavandula angustifolia",
genus: "Lavandula",
type: "Herb",
description: "Grey-green foliage with tall spikes of small purple flowers and a strong scent.",
light_requirements: "Full sun",
watering_frequency: "Every 1–2 weeks",
soil_type: "Sandy, well-drained",
bloom_season: "Summer",
mature_height: "60–90 cm",
growth_rate: "Moderate",
difficulty: "Easy",
ideal_temperature: "15–30°C",
toxicity: "Non-toxic",
img_url: "https://agrrakoqlneqtjnvccxc.supabase.co/storage/v1/object/public/plant-pic//Lavender.jpg",
}

### GET /api/users/:user_name

**Description:** Returns a user

**Example Response:**

{
user_name: "jane_lee",
email: "jane.lee@example.com",
password_hash: "d8578edf8458ce06fbc5bb76a58c5ca4",
created_at: "2025-06-06T12:35:23Z",
}

### GET /api/journals/:user_id

**Description:** Returns a list of journal entries of a user.

**Example Response:**

{
user_id: 3,
body: "Repotted my peace lily into a bigger container. Used a richer potting mix this time.",
created_at: "2025-06-07T15:30:00Z",
}

### GET /api/liked_plants/:user_id

**Description:** Returns liked plants for a given `user_id`.

**Example Response:**

[
{
liked_plant_id: 1,
user_id: 1,
plant_id: 2
},
{
liked_plant_id: 2,
user_id: 1,
plant_id: 5
}
]

# POST REQUESTS

### POST /api/plant

**Description:** Returns the plant name based on an live photo.

**Example Response:**

{
score: 92.5,
species:
{
scientificName: Ficus lyrata,
commonName: Fiddle Leaf Fig,
family: Moraceae
},
images:
[
https://example.com/images/ficus1.jpg,
https://example.com/images/ficus2.jpg
],
gbif: https://www.gbif.org/species/1234567,
powo: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:12345-1,
iucn: https://www.iucnredlist.org/species/123456/7891011
}

### POST /api/journals

**Description:** Adds a journal entry.

**Example Post:**

{
user_id: 2,
body: "Set up a watering schedule for the tomato plants—every Monday, Wednesday, and Saturday."
}

### POST /api/liked_plants

**Description:** Adds a plant to the user's liked plants.

**Queries:** n/a

**Example Post:**

{
user_id: 3,
plant_id: 1
}

# DELETE REQUESTS

### DELETE /api/liked_plants/:liked_plant_id

**Description:** Deletes a liked plant by `liked_plant_id`.

### DELETE /api/journals/:journal_entry_id

**Description:** Deletes a journal entry based on the journal entries id.
