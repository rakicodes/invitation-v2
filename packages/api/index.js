const app = require("./app");
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Invitation API listening on port ${port}`);
});
