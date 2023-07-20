const PlaylistService = require("../services/PlaylistService.js");

//--------------------------------------------------------------
test('updated play count, It should update play count in song', () => {
    const oldPlayCount = PlaylistService.getSong(1).playCount;
    const updatedPlayCount = PlaylistService.incPlayCount(1).playCount;
    expect(updatedPlayCount).toEqual(oldPlayCount + 1);
});