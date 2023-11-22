// In src/index.js
// para iniciar -> npm run dev
const express = require("express");

const cors = require("cors")
const bodyParser = require("body-parser");
const v1AuthRouter = require("./v1/routes/authRoutes");
const v1superSecureResourceRouter = require("./v1/routes/superSecureResourceRoutes");
const v1RegistrationRouter = require("./v1/routes/registrationRoutes") 

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1", v1superSecureResourceRouter);
app.use("/api/v1/registration", v1RegistrationRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  V1SwaggerDocs(app, PORT);
});
