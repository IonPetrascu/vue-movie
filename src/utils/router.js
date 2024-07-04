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
    path: "/movies/:type",
    name: "movies"
  },
  TV: {
    path: "/tv/:type",
    name: "tv"
  },
  TV_SINGLE: {
    path: "/tv/:id",
    name: "tv_single"
  },
  PEOPLE: {
    path: "/people/:type",
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
    { type: "popular", name: "Popular" },
    { type: "now_playing", name: "Now Playing" },
    { type: "upcoming", name: "Upcoming " },
    { type: "top_rated", name: "Top Rated" },
  ],
  tv: [
    { type: 'popular', name: "Popular" },
    { type: 'airing_today', name: "Airing Today" },
    { type: 'on_the_air', name: "On The Air" },
    { type: 'top_rated', name: "Top Rated" }
  ],
  people: [
    { type: 'popular', name: "Popular People" },
  ]
};
