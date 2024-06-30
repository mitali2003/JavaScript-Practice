const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genres: ["Drama"],
    rating: 9.3,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genres: ["Crime", "Drama"],
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genres: ["Crime", "Drama"],
    rating: 8.9,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genres: ["Drama", "Romance"],
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    genres: ["Drama"],
    rating: 8.8,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    genres: ["Action", "Adventure", "Drama"],
    rating: 8.9,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
  },
];

// Q-1 Find the movie with the highest rating.

const highestRating = (movies) => {
  return movies.reduce(
    (acc, curr) => (acc > curr.rating ? acc : curr.rating),
    0
  );
};
console.log(highestRating(movies));

// Q-2 : Find all directors who have directed more than one movie in the list.

const findDirector = (movies) => {
  const data = movies.reduce((acc, curr) => {
    if (!acc[curr.director]) {
      acc[curr.director] = 0;
    }
    acc[curr.director]++;
    return acc;
  }, {});
  const arr = Object.entries(data);
  const res = arr.reduce(
    (max, director) => (director[1] > max[1] ? director : max),
    arr[0]
  );
  console.log(res[0]);
};
findDirector(movies);

//Q-3 : Find the average rating of movies released in the '90s.

const avgRating = (movies) => {
  const filterData = movies.filter(
    (movie) => movie.year >= 1990 && movie.year < 2000
  );
  return (
    filterData.reduce((acc, curr) => acc + curr.rating, 0) / filterData.length
  );
};
console.log(avgRating(movies));

//Q-4 : Sort the movies by their rating in descending order, and if two movies have the same rating, sort them by their title in alphabetical order.

const sortMovies = (movies) => {
  return movies.sort(
    (a, b) => b.rating - a.rating || a.title.localeCompare(b.title)
  );
};
console.log(sortMovies(movies));

// Q-5 : Identify the director who has appeared in the most movies across different genres.

const findDirectorWithMostGenres = (movies) => {
  const genreCount = movies.reduce((acc, movie) => {
    if (!acc[movie.director]) {
      acc[movie.director] = new Set();
    }
    movie.genres.forEach((genre) => acc[movie.director].add(genre));
    return acc;
  }, {});

  const arr = Object.entries(genreCount);
  return arr.reduce((max, director) =>
    director[1].size > max[1].size ? director : max
  )[0];
};

console.log(findDirectorWithMostGenres(movies));

//Q-6 :  Find the director whose movies have the highest average rating.

const directorWithHighestAvgRating = (movies) => {
  const ratings = movies.reduce((acc, movie) => {
    if (!acc[movie.director]) {
      acc[movie.director] = { totalRating: 0, count: 0 };
    }
    acc[movie.director].totalRating += movie.rating;
    acc[movie.director].count++;
    return acc;
  }, {});

  const directorAvgRatings = Object.entries(ratings).map(
    ([director, data]) => ({
      director,
      avgRating: data.totalRating / data.count,
    })
  );

  return directorAvgRatings.reduce((max, director) =>
    director.avgRating > max.avgRating ? director : max
  ).director;
};

console.log(directorWithHighestAvgRating(movies));

//Q-7 : Find the movie title with the most words in it.

const movieWithMostWordsInTitle = (movies) => {
  return movies.reduce((max, movie) =>
    movie.title.split(" ").length > max.title.split(" ").length ? movie : max
  ).title;
};

console.log(movieWithMostWordsInTitle(movies));

//Q-8 : Find the director who has directed movies in the most unique genres.

const directorWithMostUniqueGenres = (movies) => {
  const genreCount = movies.reduce((acc, movie) => {
    if (!acc[movie.director]) {
      acc[movie.director] = new Set();
    }
    movie.genres.forEach((genre) => acc[movie.director].add(genre));
    return acc;
  }, {});

  const uniqueGenreCounts = Object.entries(genreCount).map(
    ([director, genres]) => ({
      director,
      uniqueGenres: genres.size,
    })
  );

  return uniqueGenreCounts.reduce((max, director) =>
    director.uniqueGenres > max.uniqueGenres ? director : max
  ).director;
};

console.log(directorWithMostUniqueGenres(movies));
