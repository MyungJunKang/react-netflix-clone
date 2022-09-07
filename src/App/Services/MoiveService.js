import instance from "./AxiosInstance";

export const getNowPlaying = async () => {
  return await instance.get(`movie/now_playing`);
};

export const getNetflixOriginals = async () => {
  return await instance.get(`/discover/tv?with_networks=213`);
};

export const getTrending = async () => {
  return await instance.get(`/trending/all/week`);
};

export const getTopRated = async () => {
  return await instance.get(`/moive/top_rated`);
};

export const getGenreMoives = async (id) => {
  return await instance.get(`/discover/movie?with_genres=${id}`);
};
