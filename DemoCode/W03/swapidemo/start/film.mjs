import { renderFilmDetails } from "./swapiHelper.mjs";

const filmId = new URLSearchParams(window.location.search).get("filmId");

renderFilmDetails( filmId, ".film-details");