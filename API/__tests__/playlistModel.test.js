
const GenerateID = require("../GenerateID");
const Playlist = require("../models/Playlist");
//--------------------------------------------------------------
test('Auto generated ID, it should increment by 1', () => {
    const ID = GenerateID.getID();
    expect(GenerateID.getID()).toEqual(ID+1);
});
//--------------------------------------------------------------
test('Populate Songs, it should return list songs by unique auto generated ID', 
() => {
    const songs = Playlist.getListSongs();
    for(let i=0; i<songs.length; i++){
        //check if ID is assigned
        expect(songs[i].songId).not.toBeNull();
        expect(songs[i].songId).not.toBeUndefined();

        //check if ID is unique
        for(let j=0; j<songs.length; j++){
            if(j === i){
                continue;
            }else {
                expect(songs[i].songId).not.toEqual(songs[j].songId);
            }
        }
    }


    //console.log(Playlist.getListSongs());
}
);
//--------------------------------------------------------------
test('Get song by ID, It should return the song that match ID', () => {
    const songs = Playlist.getListSongs();
    songs.forEach(song => {
        expect(song).toEqual(Playlist.getSong(song.songId));
    });
});
//--------------------------------------------------------------
test('Adding new song, It should add song to the playlist', () => {
    const playlistLength = Playlist.getListSongs().length;
    const song = Playlist.addSong("Test", ["test1", "test2"], "http://test");

    //check length of array if playlist array added new element
    expect(playlistLength + 1).toEqual(Playlist.getListSongs().length);

    //check if return of added song match the content of latest added song in playlist
    const length = Playlist.getListSongs().length;
    expect(Playlist.getListSongs()[length-1]).toEqual(song);
});
//--------------------------------------------------------------
test('Updated song, It should update song to the playlist', () => {
    const oldPlaylist = Playlist.getListSongs().map(song => {return song});
    const updatedSong = {songId: 1,title: "Test", 
    artists: ["test1", "test2"], url: "http://test", playCount: 4};

    const newPlaylist = Playlist.updateSong(updatedSong);

    //check if playlist change when song updated
    expect(newPlaylist).not.toEqual(oldPlaylist);

    //check if song with id=1 updated and besides updated song 
    //check if the rest of song in playlist unchanged;
    newPlaylist.forEach(song => {
        if(song.songId === 1){
            expect(song).toEqual(updatedSong);
        }else {
            const flag = oldPlaylist.find( it => it.songId === song.songId);
            expect(song).toEqual(flag);
        }
    });
});