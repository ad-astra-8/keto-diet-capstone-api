// const knex = require('knex');
// const app = require('../src/app');

// describe('Note Endpoints', function () {

// 	let db;

// 	before('make knex instance', () => {
// 		db = knex({
// 			client: 'pg',
// 			connection: process.env.TEST_DATABASE_URL
// 		});
// 		app.set('db', db);
// 	});

// 	after('disconnect from db', () => db.destroy());

// 	before('clean the table', () =>
// 		db.raw('TRUNCATE note, folder RESTART IDENTITY CASCADE')
// 	);

// 	afterEach('cleanup', () =>
// 		db.raw('TRUNCATE note, folder RESTART IDENTITY CASCADE')
// 	);

   

// });

// describe(`GET /api/recipes`, () => {
// 	context(`Given no recipe`, () => {
// 		it(`responds with 200 and an empty list`, () => {
// 			return supertest(app)
// 				.get('/api/recipes')
// 				.expect(200, []);
// 		});

//     });

// context(`Given there are recipes in the db`, () => {
//     it('responds with 200 and all of the recipes', () => {
//       return supertest(app)
//         .get('/api/recipes')
//         .expect(200, testFolders)
//     })
// })