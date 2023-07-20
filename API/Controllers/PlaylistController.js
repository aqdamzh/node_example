const PlaylistService = require("../services/PlaylistService");
const express = require('express');

const controller = express.Router();

controller.get('/', (req, res) => {
    const playlist = PlaylistService.getPlaylist();
    res.json(playlist);
});