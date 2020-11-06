import axios from "axios";
import { API_KEY } from "./apiKey";

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/search",
});

const queryYouTube = (topic) => {
  return instance
    .get(`?part=snippet&q=${topic}&key=${API_KEY}`)
    .then(({ data: { items } }) => items);
};

export default queryYouTube;
