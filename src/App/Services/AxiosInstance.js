import axios from "axios";

const endPoint = process.env.REACT_APP_MOVIE_DB_ENDPOINT;
const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
const instance = axios.create({
  baseURL: endPoint,
  params: {
    api_key: apiKey,
    language: "ko-KR",
  },
});

export default instance;
