function avgPage(books) {
  if (books.length === 0) {
    return 0;
  }

  const Tpages = books
    .map((book) => book.pages)
    .reduce((acc, curr) => acc + curr);
  const AVGpage = Tpages / books.length;

  return AVGpage;
}

let books = [
  { author: "younes", title: "book1", pages: 300 },
  { author: "howa", title: "book2", pages: 400 },
  { author: "hiya", title: "book3", pages: 500 },
];
console.log(avgPage(books));
