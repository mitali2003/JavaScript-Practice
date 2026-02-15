const genres = [
  { id: 1, name: "Platformer" },
  { id: 2, name: "Action-Adventure" },
  { id: 3, name: "Fighting" },
  { id: 4, name: "RPG" },
  { id: 5, name: "Puzzle" },
  { id: 6, name: "Racing" },
  { id: 7, name: "Sports" },
  { id: 8, name: "Shoot 'em up" },
  { id: 9, name: "Stealth" },
  { id: 10, name: "Strategy" },
];

const retroGames = [
  {
    id: 1,
    title: "Super Mario Bros.",
    genres: [1, 5], // Platformer, Puzzle
    isMultiplayer: true,
    availability: [
      { name: "Nintendo Switch Online", releaseYear: 1985, rating: 4.8 },
      { name: "NES Classic", releaseYear: 2016, rating: 4.9 },
    ],
  },
  {
    id: 2,
    title: "The Legend of Zelda",
    genres: [2, 10], // Action-Adventure, Strategy
    isMultiplayer: false,
    availability: [
      { name: "NES", releaseYear: 1986, rating: 4.9 },
      { name: "Wii Virtual Console", releaseYear: 2006, rating: 4.7 },
    ],
  },
  {
    id: 3,
    title: "Final Fantasy VII",
    genres: [4, 2], // RPG, Action-Adventure
    isMultiplayer: false,
    availability: [
      { name: "PlayStation Store", releaseYear: 1997, rating: 4.9 },
      { name: "Steam", releaseYear: 2013, rating: 4.8 },
      { name: "Play Store", releaseYear: 2015, rating: 4.2 },
    ],
  },
  {
    id: 4,
    title: "Street Fighter II",
    genres: [3, 7], // Fighting, Sports (Competitive)
    isMultiplayer: true,
    availability: [
      { name: "Arcade", releaseYear: 1991, rating: 4.9 },
      { name: "SNES", releaseYear: 1992, rating: 4.7 },
    ],
  },
  {
    id: 5,
    title: "Metal Gear Solid",
    genres: [9, 2, 10], // Stealth, Action-Adventure, Strategy
    isMultiplayer: false,
    availability: [
      { name: "PSN", releaseYear: 1998, rating: 4.8 },
      { name: "PC", releaseYear: 2000, rating: 4.5 },
    ],
  },
  {
    id: 6,
    title: "Metroid",
    genres: [2, 8, 1], // Action-Adventure, Shoot 'em up, Platformer
    isMultiplayer: false,
    availability: [{ name: "NES", releaseYear: 1986, rating: 4.3 }],
  },
  {
    id: 7,
    title: "Chrono Trigger",
    genres: [4, 10], // RPG, Strategy
    isMultiplayer: false,
    availability: [
      { name: "SNES", releaseYear: 1995, rating: 5.0 },
      { name: "Play Store", releaseYear: 2011, rating: 4.6 },
      { name: "Steam", releaseYear: 2018, rating: 4.7 },
    ],
  },
  {
    id: 8,
    title: "Mario Kart 64",
    genres: [6, 7], // Racing, Sports
    isMultiplayer: true,
    availability: [
      { name: "Nintendo 64", releaseYear: 1996, rating: 4.8 },
      { name: "Wii U", releaseYear: 2016, rating: 4.5 },
    ],
  },
  {
    id: 9,
    title: "Tetris",
    genres: [5, 10], // Puzzle, Strategy
    isMultiplayer: true,
    availability: [
      { name: "Game Boy", releaseYear: 1989, rating: 5.0 },
      { name: "Play Store", releaseYear: 2020, rating: 4.1 },
    ],
  },
  {
    id: 10,
    title: "Castlevania: Symphony of the Night",
    genres: [2, 1, 4], // Action-Adventure, Platformer, RPG
    isMultiplayer: false,
    availability: [
      { name: "PlayStation", releaseYear: 1997, rating: 4.9 },
      { name: "Xbox Live", releaseYear: 2007, rating: 4.8 },
    ],
  },
  {
    id: 11,
    title: "Star Fox 64",
    genres: [8, 2], // Shoot 'em up, Action-Adventure
    isMultiplayer: true,
    availability: [
      { name: "Nintendo 64", releaseYear: 1997, rating: 4.7 },
      { name: "3DS", releaseYear: 2011, rating: 4.6 },
    ],
  },
  {
    id: 12,
    title: "Pokémon Red/Blue",
    genres: [4, 10, 2], // RPG, Strategy, Action-Adventure
    isMultiplayer: true,
    availability: [
      { name: "Game Boy", releaseYear: 1996, rating: 4.9 },
      { name: "3DS Virtual Console", releaseYear: 2016, rating: 4.8 },
    ],
  },
];

// 1. Write a function getMultiplayerGameStatsByGenre that accepts a genreId as an argument and returns an object that provides the following information:
// Total number of multiplayer games of the specified genre.
// The average rating of multiplayer games for the given genre across all platforms.
// The list of games that are multiplayer and belong to the specified genre.

// getMultiplayerGameStatsByGenre(2);

// {
//   "totalGames": 2,
//   "avgRating": 4.75,
//   "gameTitles": [
//       "Star Fox 64",
//       "Pokémon Red/Blue"
//   ]
// }

/* 2. Write a JavaScript function that transforms the retroGames dataset by filtering out the games that are not multiplayer and grouping the remaining games by their
 availability platform */

// The output should be an object where:
// The keys are the platform names (e.g., "Nintendo Switch Online").
// The values are objects containing:
// games: An array of game which contains title and rating available on that platform, sorted by rating in descending order.
// averageRating: The average rating of all games available on that platform.

// {
//   "Play Store": {
//     games: [{title: "Final Fantasy VII", rating: 4.2}, {title: "Chrono Trigger", rating: 4.6}],
//     averageRating: 4.4
//   },
//   // Other platforms...
// }

const getMultiplayerGameStatsByGenre = (genreId) => {
  const filterData = retroGames.filter(
    ({ isMultiplayer, genres }) => isMultiplayer && genres.includes(genreId),
  );

  return {
    totalGames: filterData.length,
    avgRating:
      filterData.reduce(
        (acc, curr) =>
          acc + curr.availability.reduce((acc, curr) => acc + curr.rating, 0),
        0,
      ) / filterData.flatMap(({ availability }) => availability).length,
    gameTitles: filterData.map(({ title }) => title),
  };
};
console.log(getMultiplayerGameStatsByGenre(2));

const formatData = () => {
  const multiplayerGames = retroGames.filter(
    ({ isMultiplayer }) => isMultiplayer,
  );

  const grouped = multiplayerGames.reduce((acc, game) => {
    game.availability.forEach(({ name, rating }) => {
      if (!acc[name]) {
        acc[name] = {
          games: [],
          averageRating: 0,
        };
      }

      acc[name].games.push({
        title: game.title,
        rating: rating,
      });
    });

    return acc;
  }, {});

  Object.keys(grouped).forEach((platform) => {
    const games = grouped[platform].games;
    games.sort((a, b) => b.rating - a.rating);
    const avg = games.reduce((sum, g) => sum + g.rating, 0) / games.length;
    grouped[platform].averageRating = Number(avg.toFixed(2));
  });

  return grouped;
};

console.log(formatData());
