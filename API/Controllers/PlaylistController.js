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

controller.get('/most-played', (req, res) => {
    const playlist = PlaylistService.getMostPlayed();
    res.json(playlist);
});

module.exports = controller;