
const GenerateID = require("../GenerateID");

let playlist = [
{songId: GenerateID.getID(), title: "LOST IN PARADISE", artists: ["ALI", "AKLO"], 
url: "https://open.spotify.com/track/7kRKlFCFLAUwt43HWtauhX?si=d90fe0b4381743b4", 
playCount: 104687203},
{songId: GenerateID.getID(), title: "LOSER", artists: ["Kenshi Yonezu"], 
url: "https://open.spotify.com/track/7AqUE5AY514dbzeOAfJRa0?si=c6d0129c40e24f3b", 
playCount: 45233991}, 
{songId: GenerateID.getID(), title: "ピースサイン", artists: ["Kenshi Yonezu"],
url: "https://open.spotify.com/track/364JzOajs76bJymjHm3sVY?si=4a2ca2eea4b84617",
playCount: 182847751},
];

class Playlist {
    constructor(songId, title, artists, url, playCount) {
        this.SongId = songId;
        this.title = title;
        this.artists = artists;
        this.url = url;
        this.playCount = playCount;
    }

    static getListSongs() {
        return playlist;
    }
}

module.exports = Playlist;