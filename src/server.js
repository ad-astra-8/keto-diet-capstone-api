//loading external resources
const knex = require('knex')
const app = require('./app')
//connection to the config file
const { PORT, DATABASE_URL } = require('./config')
//create the db connection
const db = knex({
      client: 'pg',
      connection: DATABASE_URL,
    })
//set the db as part of the app in order to use it
app.set('db', db)
//run server on assigning PORT
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

