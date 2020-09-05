import axios from "axios";
// 26e4390786f40aaa29e9cb5401862fed - me
// 10923b261ba94d897ac6b81148314a3f - nomad

const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { 
    // api_key: "10923b261ba94d897ac6b81148314a3f",   // api_key 를 파라미터로 넣으면 안되네...
    language: "en-US"
  },
});

export const movies = {
  // getNowPlaying2: () => api.get("movie/now_playing"),  // api_key 를 파라미터로 넣으면 안되네...
  getNowPlaying: () => api.get("movie/now_playing", { params: {api_key: API_KEY} }),
  getPopular: () => api.get("movie/popular", { params: {api_key: API_KEY} }),
  getUpcoming: () => api.get("movie/upcoming", { params: {api_key: API_KEY} }),
  getMovie: id =>
    api.get(`movie/${id}`, { params: { api_key: API_KEY, append_to_response: "videos" } }),
  searchMovies: term =>
    api.get("search/movie", {
      params: {
        api_key: API_KEY,
        query: encodeURIComponent(term)
      }
    })
};

export const tv = {
  getPopular: () => api.get("tv/popular", { params: {api_key: API_KEY} }),
  getAiringToday: () => api.get("tv/airing_today", { params: {api_key: API_KEY} }),
  getAiringThisWeek: () => api.get("tv/top_rated", { params: {api_key: API_KEY} }),
  getShow: id =>
    api.get(`tv/${id}`, { params: { api_key: API_KEY, append_to_response: "videos" } }),
  searchTv: term =>
    api.get("search/tv", {
      params: {
        api_key: API_KEY,
        query: encodeURIComponent(term)
      }
    })
};
