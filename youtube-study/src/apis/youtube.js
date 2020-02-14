import axios from "axios";

const KEY = "AIzaSyD-9U7kKMfhY86eX7YL4BLLa44YnR2MgSQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: 'video',
        maxResults: "5",
        key: KEY
    }
});
