const knex = require('knex');

const getUserByEmail = async (email) => { 
    return await knex("users").where({email}.first())
 }

module.exports={
    getUserByEmail
}