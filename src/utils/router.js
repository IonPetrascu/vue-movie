export const ROUTER_PATH = {
  HOME: {
    path: "/",
    name: "home"
  },
  MOVIE_SINGLE: {
    path: "/movie/:id",
    name: "movie_single"
  },
  MOVIES: {
    path: "/movies",
    name: "movies"
  },
  TV: {
    path: "/tv",
    name: "tv"
  },
  TV_SINGLE: {
    path: "/tv/:id",
    name: "tv_single"
  },
  PEOPLE: {
    path: "/peoples",
    name: "people"
  },
  PEOPLE_SINGLE: {
    path: "/people/:id",
    name: "people_single"
  },
  GENRES: {
    path: "/genres/:id",
    name: "genres_single"
  }
};


export const ROUTES_SUBPAGES = {
  movies: [
    { path: "/movies/now-playing", name: "movies_now_playing" },
    { path: "/movies/popular", name: "movies_popular" },
    { path: "/movies/top-rated", name: "movies_top_rated" },
    { path: "/movies/up-coming", name: "movies_up_coming" },
  ],
  tv_page: [
    { path: "/tv-page-subpage1/:id", name: "TV Page Subpage 1" },
    { path: "/tv-page-subpage2/:id", name: "TV Page Subpage 2" }
  ]
};
