const knex = require("knex");

const PGHOST = "ep-winter-shape-a2rbuxds.eu-central-1.aws.neon.tech"; // localhost 127.0.0.1
const PGDATABASE = "neondb"; // dvdrental postgres
const PGUSER = "neondb_owner"; // postgres
const PGPASSWORD = "RiC1Xg4vELMZ";
const PGPORT = 5432;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

async function getVersion() {
  try {
    const result = await db.raw("select version()");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
// getVersion();

// select
// db.raw("select * from products")
//   .then((data) => console.log(data.rows))
//   .catch((err) => console.log(err));

// query builder
// db("products")
//   .select("id", "name", "price")
//   .whereIn("id", [24, 26])
//   .orderBy("name")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// insert
// db("products")
//   .insert(
//     [
//       { name: "hhh", price: 444 },
//       { name: "jjj", price: 333 },
//     ],
//     ["id", "name", "price"]
//   )

// update
// db("products")
//   .update({ name: "iPhone17", price: 12000 }, ["name"])
//   .where({ id: 25 })

// db("products")
//   .whereIn("id", [28, 24, 25])
//   .del()
//   .returning(["id", "name", "price"])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
