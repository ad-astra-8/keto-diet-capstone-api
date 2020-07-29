const knex = require('knex');
const app = require('../src/app');
const { makeFoldersArray } = require('./folders.fixtures');

describe('Keto-diet-capstone API - folders', function () {

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

  describe(`GET /api/folders`, () => {
    //contexts and all the tests here
    context(`Given no folders`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/folders')
          .expect(200, [])
      })
    })

    context(`Given there are folders in the db`, () => {
      testFolders = makeFoldersArray();

      beforeEach('insert folders', () => {
        return db
          .into('folders')
          .insert(testFolders)
      })

      it('responds with 200 and all of the folders', () => {
        return supertest(app)
          .get('/api/folders')
          .expect(200, testFolders)
      })
    })
  })


});