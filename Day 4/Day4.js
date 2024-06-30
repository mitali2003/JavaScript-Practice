const books = [
  {
    id: 1,
    title: "Racecar",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
    publicationDate: new Date("2024-04-10"),
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
    publicationDate: new Date("1949-06-08"),
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isAvailable: false,
    publicationDate: new Date("1960-07-11"),
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    isAvailable: true,
    publicationDate: new Date("1851-10-18"),
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isAvailable: true,
    publicationDate: new Date("1813-01-28"),
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isAvailable: false,
    publicationDate: new Date("2024-07-16"),
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isAvailable: true,
    publicationDate: new Date("1937-09-21"),
  },
  {
    id: 8,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    isAvailable: true,
    publicationDate: new Date("1953-10-19"),
  },
  {
    id: 9,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isAvailable: false,
    publicationDate: new Date("1954-07-29"),
  },
  {
    id: 10,
    title: "Brave - New World",
    author: "Aldous Huxley",
    isAvailable: true,
    publicationDate: new Date("1932-08-18"),
  },
];

//Q-1 Write a function to get all books published in a given year.
const getBooksPublishedThisYear = () => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => book.publicationDate.getFullYear() === currentYear)
    .map((book) => book.title);
};

console.log(getBooksPublishedThisYear());

// Q-2  Create a function to get the list of books that have the longest and shortest titles.
const getBooksByTitleLength = () => {
  const sortedBooks = books.sort((a, b) => a.title.length - b.title.length);
  return {
    shortestTitle: sortedBooks[0].title,
    longestTitle: sortedBooks[sortedBooks.length - 1].title,
  };
};
console.log(getBooksByTitleLength());

// Q-3  Create a function to get the book with the most words in its title.
const getBookWithMostWordsInTitle = () => {
  return books.reduce(
    (maxBook, book) => {
      const wordCount = book.title.split(" ").length;
      return wordCount > maxBook.wordCount ? { book, wordCount } : maxBook;
    },
    { book: null, wordCount: 0 }
  ).book;
};
console.log(getBookWithMostWordsInTitle());

//Q-4 Write a function to get books whose titles are palindromes.
const getPalindromeTitles = () => {
  const isPalindrome = (str) => str === str.split("").reverse().join("");
  return books
    .filter((book) =>
      isPalindrome(book.title.replace(/\s+/g, "").toLowerCase())
    )
    .map((book) => book.title);
};
console.log(getPalindromeTitles());

//Q-5 Find books published before a specific year and mark them as "classic" using an object method.
const markClassicBooks = (year) => {
  return books
    .filter((book) => book.publicationDate.getFullYear() < year)
    .map((book) => {
      return Object.assign({}, book, { isClassic: true });
    });
};
console.log(markClassicBooks(2000));

// Q-6 Use array methods to find the total number of words in titles of available books published after 2000, sorted alphabetically.
const getTotalWordsInAvailableTitlesAfter2000 = () => {
  return books
    .filter(
      (book) => book.isAvailable && book.publicationDate.getFullYear() > 2000
    )
    .map((book) => book.title)
    .sort()
    .reduce((total, title) => total + title.split(" ").length, 0);
};
console.log(getTotalWordsInAvailableTitlesAfter2000());

// Q-7 Create a function to determine if there are any books with titles containing only numeric characters.
const hasNumericTitleBooks = () => {
  return books.some((book) => /^\d+$/.test(book.title));
};

console.log(hasNumericTitleBooks());

//Q-8 Create a function to generate a random book recommendation based on the publication year.
const getRandomBookRecommendation = () => {
  const randomIndex = Math.floor(Math.random() * books.length);
  const randomBook = books[randomIndex];
  return `I recommend "${randomBook.title}" by ${
    randomBook.author
  }. It was published in ${randomBook.publicationDate.getFullYear()}.`;
};

console.log(getRandomBookRecommendation());

//Q-9 Create a function to determine the percentage of books that have titles containing at least one punctuation mark.
const calculatePunctuationTitlePercentage = () => {
  const totalBooks = books.length;
  const punctuationTitleBooks = books.filter((book) =>
    /[^\w\s]/.test(book.title)
  );
  const punctuationTitlePercentage =
    (punctuationTitleBooks.length / totalBooks) * 100;
  return punctuationTitlePercentage.toFixed(2) + "%";
};

console.log(calculatePunctuationTitlePercentage());
