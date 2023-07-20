const PlaylistService = require("../services/PlaylistService.js");

//--------------------------------------------------------------
test('updated play count, It should update play count in song', () => {
    const oldPlayCount = PlaylistService.getSong(1).playCount;
    const updatedPlayCount = PlaylistService.incPlayCount(1).playCount;
    expect(updatedPlayCount).toEqual(oldPlayCount + 1);
});

//--------------------------------------------------------------
test('most played song, It should sort playlist descending by play count', () => {
    const mostPlayedSongs = PlaylistService.getMostPlayed();

    //check if it is already sorted descending properly
    for(let i=0; i<mostPlayedSongs.length; i++){
        for(let j = i+1; j<mostPlayedSongs.length; j++){
            expect(mostPlayedSongs[i].playCount > mostPlayedSongs[j].playCount)
            .toBe(true);
        }
    }
});