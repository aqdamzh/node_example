const express = require("express");
const PlaylistController = require("./Controllers/PlaylistController.js");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const apiRoute = express.Router();
app.use('/api', apiRoute);

apiRoute.use('/playlist', PlaylistController);

module.exports = app;