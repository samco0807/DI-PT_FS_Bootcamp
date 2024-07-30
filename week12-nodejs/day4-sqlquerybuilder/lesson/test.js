const PGHOST='ep-restless-cloud-a2vjn4p4.eu-central-1.aws.neon.tech'
const PGDATABASE='Samcodb'
const PGUSER='Samcodb_owner'
const PGPASSWORD='j8AzyemgD7wd'

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
  },
});


const getVersion = async () => { 
    try {
        const result=await db.row("select version()")
        console.log(result);
    } catch (error) {
        console.log(error);
    }
 }
 getVersion()

 db("products")
 .select("id")