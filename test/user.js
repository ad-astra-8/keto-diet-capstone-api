// "use strict";

// const app = require("./server");
// const chai = require("chai");
// const chaiHttp = require("chai-http");

// const UsersService = require('./users-service')

// const expect = chai.expect;

// chai.use(chaiHttp);

// describe("Keto API - Users", function () {
//     const username = "exampleUser";
//     const password = "examplePass";

//     before(function () {
//         return db.connect(TEST_MONGODB_URI)
//             .then(() => db.dropDatabase());
//     });

//     beforeEach(function () {
//         return User.createIndexes();
//     });

//     afterEach(function () {
//         return db.dropDatabase();
//     });

//     after(function () {
//         return db.disconnect();
//     });

//     describe("POST /api/users", function () {

//         it("Should create a new user", function () {
//             let res;
//             return chai
//                 .request(app)
//                 .post("/api/users")
//                 .send({ username, password })
//                 .then(_res => {
//                     res = _res;
//                     expect(res).to.have.status(201);
//                     expect(res.body).to.be.an("object");
//                     expect(res.body).to.have.all.keys("id", "username", "password");
//                     expect(res.body.id).to.exist;
//                     expect(res.body.username).to.equal(username);
//                     return User.findOne({ username });
//                 })
//                 .then(user => {
//                     expect(user).to.exist;
//                     expect(user.id).to.equal(res.body.id);
//                     expect(user.password).to.equal(password);
//                     return user.validatePassword(password);
//                 })
//                 .then(isValid => {
//                     expect(isValid).to.be.true;
//                 });
//         });
//     });
// });