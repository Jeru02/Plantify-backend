import db from "../db/connection"
import seed from "../db/seeds/seed"
import plantData from "../db/data/test-data/plant";

beforeAll(() => seed(plantData));
afterAll(() => db.end());

// describe('plants table', () => {
//   test('plants table exists', () => {
//     return db
//       .query(
//         `SELECT EXISTS (
//             SELECT FROM
//                 information_schema.tables
//             WHERE
//                 table_name = 'plants'
//             );`
//       )
//       .then(({ rows: { exists: boolean }[] }) => {
//         expect(exists).toBe(true);
//       });
//   });
// })