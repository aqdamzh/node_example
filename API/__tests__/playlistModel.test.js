
const GenerateID = require("../GenerateID");
const Playlist = require("../models/Playlist");

test('Auto generated ID, it should increment by 1', () => {
    const ID = GenerateID.getID();
    expect(GenerateID.getID()).toEqual(ID+1);
});

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