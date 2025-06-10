const request = require("supertest");
import app from "../api";
import db from "../db/connection";
import seed from "../db/seeds/seed";
import PlantData from "../db/data/test-data/plant.test-data";
import { Response } from "supertest";
import { QueryResult } from "pg";
import QuizData from "../db/data/test-data/quiz.test-data";
import UserData from "../db/data/test-data/users.test-data";
import Liked_plantData from "../db/data/test-data/liked_plants.test-data";
import JournalEntryData from "../db/data/test-data/journal.test-data";

beforeEach(() => {
  return seed(PlantData, QuizData, UserData, Liked_plantData, JournalEntryData);
});
afterAll(() => {
  return db.end();
});

describe("GET /api/plants", () => {
  test("200 - responds with the requested array containing all of the plants", () => {
    return request(app)
      .get("/api/plants")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.plants).toHaveLength(10);
        response.body.plants.forEach((singlePlant: QueryResult) => {
          expect(singlePlant).toMatchObject({
            plant_id: expect.any(Number),
            name: expect.any(String),
            scientific_name: expect.any(String),
            genus: expect.any(String),
            type: expect.any(String),
            description: expect.any(String),
            light_requirements: expect.any(String),
            watering_frequency: expect.any(String),
            soil_type: expect.any(String),
            bloom_season: expect.any(String),
            mature_height: expect.any(String),
            growth_rate: expect.any(String),
            difficulty: expect.any(String),
            ideal_temperature: expect.any(String),
            toxicity: expect.any(String),
            img_url: expect.any(String),
          });
        });
      });
  });
});

describe("GET /api/plants/:plant_id", () => {
  test("200 - responds with the requested plant by plant_id", () => {
    return request(app)
      .get("/api/plants/1")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.plant).toEqual({
          plant_id: 1,
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
        });
      });
  });
});

describe("GET /api/quiz/:question_id", () => {
  test("200 - responds with the requested question and answer by question_id", () => {
    return request(app)
      .get("/api/quiz/1")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.question).toEqual({
          question_id: 1,
          question: "What do plants need to perform photosynthesis?",
          answer: "Sunlight, water, and carbon dioxide",
        });
      });
  });
});

describe("GET /api/fakeData", () => {
  test("200 - responds with the requested question and answer by question_id", () => {
    return request(app)
      .get("/api/fakeData")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.fakeData).toEqual({
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9, count: 120 },
        });
      });
  });
});

describe("GET /api/currentWeather", () => {
  test("200 - responds with the requested current weather", () => {
    return request(app)
      .get("/api/currentWeather")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.currentWeather).toMatchObject({
          maxtemp_c: expect.any(Number),
          maxtemp_f: expect.any(Number),
          mintemp_c: expect.any(Number),
          mintemp_f: expect.any(Number),
          avgtemp_c: expect.any(Number),
          avgtemp_f: expect.any(Number),
          maxwind_mph: expect.any(Number),
          maxwind_kph: expect.any(Number),
          totalprecip_mm: expect.any(Number),
          totalprecip_in: expect.any(Number),
          totalsnow_cm: expect.any(Number),
          avgvis_km: expect.any(Number),
          avgvis_miles: expect.any(Number),
          avghumidity: expect.any(Number),
          daily_will_it_rain: expect.any(Number),
          daily_chance_of_rain: expect.any(Number),
          daily_will_it_snow: expect.any(Number),
          daily_chance_of_snow: expect.any(Number),
          condition: {
            text: expect.any(String),
            icon: expect.any(String),
            code: expect.any(Number),
          },
          uv: expect.any(Number),
        });
      });
  });
});

describe("GET /api/plant_name", () => {
  test("200 - responds with the correct plant name", () => {
    return request(app)
      .get(
        "/api/plant_name?img_url=https://agrrakoqlneqtjnvccxc.supabase.co/storage/v1/object/public/plant-pic//Sunflower.jpg"
      )
      .expect(200)
      .then((response: Response) => {
        expect(response.body.plantData[0]).toMatchObject({
          score: expect.any(Number),
          species: expect.any(Object),
          images: expect.any(Array),
          gbif: expect.any(String),
          powo: expect.any(String),
          iucn: expect.any(String),
        });
      });
  });
});

describe("GET /api/genus/:genus", () => {
  test("200 - responds with the requested plant object from the genus", () => {
    return request(app)
      .get("/api/genus/Helianthus")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.plant).toEqual({
          plant_id: 1,
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
        });
      });
  });
});

describe("GET /api/users/:user_id", () => {
  xtest("status 200 - responds with requested user", () => {
    return request(app)
      .get("/api/users/1")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.user).toEqual({
          user_id: 1,
          user_name: "alex_morris",
          email: "alex.morris@example.com",
          password_hash: "a8f5f167f44f4964e6c998dee827110c",
          created_at: "2025-06-06T12:34:56Z",
        });
      });
  });
});

describe("GET /api/liked_plants/:user_id", () => {
  test("status 200 - responds with requested liked_plants by the correct user_id", () => {
    return request(app)
      .get("/api/liked_plants/1")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.liked_plants).toEqual([
          {
            liked_plant_id: 1,
            user_id: 1,
            plant_id: 2,
          },
          {
            liked_plant_id: 2,
            user_id: 1,
            plant_id: 5,
          },
        ]);
      });
  });
});

describe("Post /api/liked_plants", () => {
  test("201: responds with the newly liked plant", () => {
    const newLike = {
      user_id: 3,
      plant_id: 1,
    };
    return (
      request(app)
        .post("/api/liked_plants")
        .send(newLike)
        //assert
        .expect(201)
        .then((response: Response) => {
          expect(response.body.liked_plant).toEqual({
            liked_plant_id: 4,
            user_id: 3,
            plant_id: 1,
          });
        })
    );
  });
});

describe("DELETE /api/liked_plants/:liked_plant_id", () => {
  test("status: 204 - delete the liked_plant with the liked_plant_id", () => {
    return request(app)
      .delete("/api/liked_plants/1")
      .expect(204)
      .then(() => {
        return db
          .query(`SELECT * FROM liked_plants WHERE liked_plant_id = 1`)
          .then((response: QueryResult) => {
            expect(response.rows.length).toBe(0);
          });
      });
  });
});

describe(" GET /api/users/:user_name", () => {
  test("status: 200 - return user by specified user_name", () => {
    return request(app)
      .get("/api/users/guest")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.user).toMatchObject({
          user_id: 1,
          user_name: "guest",
          email: "guest@example.com",
          password_hash: "a8f5f167f44f4964e6c998dee827110c",
        });
      });
  });
});
//
//
//
//
//
//
//
//

//
describe.only("GET api/journals/:user_id", () => {
  test("status 200 - responds with all users journal entries", () => {
    return request(app)
      .get("/api/journals/1")
      .expect(200)
      .then((response: Response) => {
        expect(response.body.journalEntries).toEqual([
          {
            journal_entry_id: 1,
            user_id: 1,
            body: "Planted lavender and basil in the herb bed today. Added compost and watered thoroughly.",
            created_at: "2025-06-05T08:45:00Z",
          },
        ]);
      });
  });
});

describe.only("Post /api/journals", () => {
  test("201: responds with the newly posted journal entry", () => {
    const newJournalEntry = {
      user_id: 2,
      body: "Planted sunflower and basil in the herb bed today. Added compost and watered thoroughly.",
      created_at: "2025-06-05T08:45:00Z",
    };
    return (
      request(app)
        .post("/api/journals")
        .send(newJournalEntry)
        //assert
        .expect(201)
        .then((response: Response) => {
          expect(response.body.journalEntry).toEqual({
            journal_entry_id: 6,
            user_id: 2,
            body: "Planted sunflower and basil in the herb bed today. Added compost and watered thoroughly.",
            created_at: "2025-06-05T08:45:00Z",
          });
        })
    );
  });
});

describe.only("DELETE /api/journals`/:journal_entry_id", () => {
  test("status: 204 - delete the journal entry with the journal entry id", () => {
    return request(app)
      .delete("/api/journals/1")
      .expect(204)
      .then(() => {
        return db
          .query(`SELECT * FROM journal WHERE journal_entry_id = 1`)
          .then((response: QueryResult) => {
            expect(response.rows.length).toBe(0);
          });
      });
  });
});
