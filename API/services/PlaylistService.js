const Playlist = require("../models/Playlist");

class PlaylistService {
    static getPlaylist(){
        return Playlist.getListSongs;
    }

    static getSong(id) {
        return Playlist.getSong(id);
    }

    static addSong(title, artists, url){
        // TODO: validate song data

        return Playlist.addSong(title, artists, url);
    }

    static incPlayCount(id) {
        const song = Playlist.getSong(id);
        song.playCount += 1;
        return Playlist.updateSong(song);
    }
}

module.exports = PlaylistService;