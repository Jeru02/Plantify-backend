import db from "../db/connection"
import seed from "../db/seeds/seed"

beforeAll(() => seed());
afterAll(() => db.end());

test("", ()=>{


})