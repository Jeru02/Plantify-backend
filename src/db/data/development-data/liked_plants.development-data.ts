export interface Liked_plant {
  user_id: number;
  plant_id: number;
}

const Liked_plantData: Array<Liked_plant> = [
  {
    user_id: 1,
    plant_id: 2,
  },
  {
    user_id: 1,
    plant_id: 5,
  },
  {
    user_id: 6,
    plant_id: 4,
  },
];

export default Liked_plantData;
