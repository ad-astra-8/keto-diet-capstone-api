// const knex = require('knex');
// const app = require('../src/app');
// // const { makeNoteArray, makeMaliciousNote } = require('./note-fixtures');
// // const { makeFolderArray } = require('./folder-fixtures');

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

// describe(`GET /api/notes`, () => {
// 	context(`Given no notes`, () => {
// 		it(`responds with 200 and an empty list`, () => {
// 			return supertest(app)
// 				.get('/api/notes')
// 				.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
// 				.expect(200, []);
// 		});
// 	});

// 	context('Given there are notes in the database', () => {
// 		// const testFolder = makeFolderArray();
// 		// const testNote = makeNoteArray();

// 		beforeEach('insert note', () => {
// 			return db
// 				.into('folder')
// 				.insert(testFolder)
// 				.then(() => {
// 					return db
				// .into('note')
				// .insert(testNote);
// 				});
// 		});

// 		it('responds with 200 and all of the notes', () => {
// 			return supertest(app)
// 				.get('/api/notes')
// 				.expect(res => {
// 					expect(res.body[0].name).to.eql(testNote[0].name);
// 					expect(res.body[0]).to.have.property('id');
// 				});

// 			// .expect(200, testNote);
// 		});
// 	});
// })

// describe(`POST /api/notes`, () => {
// 		// const testFolder = makeFolderArray();
// 		// const testNote = makeNoteArray();

// 		// BUT THIS IS CODE FROM Blogful !!!

// 		// beforeEach('insert note', () => {
// 		// 	return db
// 		// 		.into('folder')
// 		// 		.insert(testFolder)
// 		// 		.then(() => {
// 		// 			return db
				// .into('note')
				// .insert(testNote);
// 		// 		});
// 		// });


		// it(`creates a note, responding with 201 and the new note`, () => {
		// 	const newNote = {
		// 		name: 'Test new note',
		// 		id_folder: '2',
		// 		content: 'Test new note content...'
		// 	  }
			  
		// 	return supertest(app)
		// 	  .post('/api/notes')
		// 	  .send(newNote)
		// 	  .expect(201)
		// 	  .expect(res => {
		// 		expect(res.body.title).to.eql(newNote.name)
		// 		expect(res.body.content).to.eql(newNote.content)
		// 		expect(res.body.style).to.eql(newNote.id_folder)
		// 		expect(res.body).to.have.property('id')
		// 		expect(res.headers.location).to.eql(`/api/notes/${res.body.id}`)
		// 		expect(actual).to.eql(expected)
		// 	  })
		// 	  .then(res =>
		// 		supertest(app)
		// 		  .get(`/api/notes/${res.body.id}`)
		// 		  .expect(res.body)
		// 	  )
		//   })
	  
		//   const requiredFields = ['name', 'id_folder', 'content']
	  
		//   requiredFields.forEach(field => {
		// 	const newNote = {
		// 	  name: 'Test new note',
		// 	  id_folder: '2',
		// 	  content: 'Test new note content...'
		// 	}
		// }
	