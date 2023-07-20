const PlaylistService = require("../services/PlaylistService.js");
const express = require('express');

const controller = express.Router();

controller.get('/', (req, res) => {
    const playlist = PlaylistService.getPlaylist();
    res.json(playlist);
});

controller.get('/play/:id', (req, res) => {
    const id = req.params.id;
    const song = PlaylistService.incPlayCount(id);
    res.json(song);
});

module.exports = controller;