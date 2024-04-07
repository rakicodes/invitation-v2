const initialUserTestData = {
  email: "initialTest@test.com",
  password: "test123",
  name: "Test",
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

module.exports = {
  initialUserTestData,
  userRegisterTestData,
  userLoginTestData,
  userLoginWrongEmailTestData,
  userLoginWrongPasswordTestData,
};
