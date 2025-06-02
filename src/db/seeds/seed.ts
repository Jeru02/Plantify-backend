
import db from "../connection"

// const seed = (()=>{

// return db.query(`
//     CREATE TABLE plants(
//     plant_id SERIAL PRIMARY KEY,
//     description VARCHAR(250),
//     img_url VARCHAR(1000)
//     );    
//     `)

// })




const add = () :number=>{

    return 1
}


const seed = () :Promise<any>=>{


    return db.query(`

    DROP TABLE IF EXISTS plants;
        
   CREATE TABLE plants(
    plant_id SERIAL PRIMARY KEY,
    description VARCHAR(250),
    img_url VARCHAR(1000)
   );    
    `)



}



export default seed
