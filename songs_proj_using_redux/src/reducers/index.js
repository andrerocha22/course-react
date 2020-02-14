import { combineReducers } from "redux";

const songReducers = () => {
    return [
        { title: "No scrubs", duration: "4:05" },
        { title: "I want it that way", duration: "1:45" },
        { title: "Macarena", duration: "2:35" },
        { title: "All star", duration: "3:15" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer
});
