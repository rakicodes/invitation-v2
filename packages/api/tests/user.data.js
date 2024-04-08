const initialUserTestData = {
  email: "initialTest@test.com",
  password: "test123",
  name: "Test",
};
const initialLoginTestData = {
  email: "initialTest@test.com",
  password: "test123",
};
const userRegisterTestData = {
  email: "test@test.com",
  password: "test123",
  name: "Test",
};

const userLoginTestData = {
  email: "test@test.com",
  password: "test123",
};

const userLoginWrongEmailTestData = {
  email: "test2@test.com",
  password: "test123",
};

const userLoginWrongPasswordTestData = {
  email: "test@test.com",
  password: "test1234",
};

const adminRegisterTestData = {
  email: "admin@test.com",
  password: "test123",
  name: "Test",
  role: "admin",
};

const adminLoginTestData = {
  email: "admin@test.com",
  password: "test123",
};

module.exports = {
  initialUserTestData,
  initialLoginTestData,
  userRegisterTestData,
  userLoginTestData,
  userLoginWrongEmailTestData,
  userLoginWrongPasswordTestData,
  adminRegisterTestData,
  adminLoginTestData,
};
