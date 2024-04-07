const request = require("supertest");
const app = require("../app");
const {
  userRegisterTestData,
  userLoginTestData,
  userLoginWrongEmailTestData,
  userLoginWrongPasswordTestData,
  initialUserTestData,
} = require("./user.data");

describe("Users API", () => {
  let id;
  beforeAll(async () => {
    await request(app).post("/api/auth/register").send(initialUserTestData);

    const response = await request(app).get("/api/auth");
    id = response.body[0]._id;
  }, 10000);
  afterAll(async () => {
    await request(app).delete("/api/auth");
  }, 10000);
  describe("addUser", () => {
    it("POST /api/auth/register --> should add new user", () => {
      return request(app)
        .post("/api/auth/register")
        .send(userRegisterTestData)
        .expect(201)
        .then((response) => {
          expect(response.body).toEqual(
            expect.objectContaining({
              _id: expect.any(String),
              name: userRegisterTestData.name,
              email: userRegisterTestData.email,
              token: expect.any(String),
            }),
          );
        });
    });
    it("POST /api/auth/register --> should throw an error if a user with the same email exists", () => {
      return request(app)
        .post("/api/auth/register")
        .send(userRegisterTestData)
        .expect(409);
    });
  });

  describe("getUser", () => {
    it("GET /api/auth/id --> should return the correct user if found", () => {
      return request(app)
        .get(`/api/auth/${id}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(
            expect.objectContaining({
              email: expect.any(String),
              password: expect.any(String),
              name: expect.any(String),
            }),
          );
        });
    });
    it("GET /api/auth/id --> should return 404 status code if user is not found", () => {
      return request(app).get("/api/invitations/9999999").expect(404);
    });
  });

  describe("login", () => {
    it("POST /api/auth/login --> should log in the user", () => {
      return request(app)
        .post("/api/auth/login")
        .send(userLoginTestData)
        .expect(200);
    });
    it("POST /api/auth/login --> should throw an error if the email is incorrect", () => {
      return request(app)
        .post("/api/auth/login")
        .send(userLoginWrongEmailTestData)
        .expect(401);
    });
    it("POST /api/auth/login --> should throw an error if the password is incorrect", () => {
      return request(app)
        .post("/api/auth/login")
        .send(userLoginWrongPasswordTestData)
        .expect(401);
    });
  });
});
