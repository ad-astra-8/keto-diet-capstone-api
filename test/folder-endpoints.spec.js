const knex = require('knex')
const app = require('../src/app');

describe('Todo API:', function () {

  before('make knex instance', () => {  
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  });
  
  before('cleanup', () => db.raw('TRUNCATE TABLE notes_folder RESTART IDENTITY;'));

  afterEach('cleanup', () => db.raw('TRUNCATE TABLE notes_folder RESTART IDENTITY;')); 

  after('disconnect from the database', () => db.destroy()); 

  describe("GET /api/folders", () => {

    beforeEach('"should return a list sorted by name with the correct number of folders"', () => {
      return db('todo').insert(todos);
    })

    it("should return a list sorted by name with the correct number of folders", function () {
        const dbPromise = Folder.find({ userId: user.id }).sort("name");
        const apiPromise = chai.request(app)
          .get("/api/folders")
  
        return Promise.all([dbPromise, apiPromise])
          .then(([data, res]) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a("array");
            expect(res.body).to.have.length(data.length);
          });
      });
  
  });

 
});