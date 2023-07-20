
const GenerateID = require("../GenerateID");
const Playlist = require("../models/Playlist");

test('Auto generated ID, it should increment by 1', () => {
    const ID = GenerateID.getID();
    expect(GenerateID.getID()).toEqual(ID+1);
});

test('Populate Songs, it should return list songs by auto generated ID', 
() => {
    expect(Playlist.getListSongs()[0].songId).not.toBeNull();
}
);