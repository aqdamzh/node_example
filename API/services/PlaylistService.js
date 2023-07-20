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
        const updatedSong = Playlist.getSong(id);
        updatedSong.playCount += 1;
        Playlist.updateSong();
        return updatedSong;
    }
}

module.exports = PlaylistService;