const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", 0);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Последний просмотренный фильм");
const b = prompt("Какая оценка");

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
