const knex = require('knex');

const db = knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: "alliance",
      database: "posts",
    },
  });

  function createPost({post}){
    return db('posts').insert(
      {
        postname:post
      }
    )
    .returning('*')
  }
  
  module.exports = {
    createPost
  }