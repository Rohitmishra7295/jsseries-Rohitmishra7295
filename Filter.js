const myNums=[1,2,3,4,5,6,7,8,9,10,11]


//****** filter*********/
// const newNums=myNums.filter( (num) => num> 4 )

const newNums=myNums.filter( (num) =>{ 
    return num> 4 })  //to get result in any scope of function we have to use return keyword

// console.log(newNums);




//real world example

const books = [
    { 
      title: "The Road", 
      author: "Cormac McCarthy", 
      genre: "Post-Apocalyptic Fiction", 
      publishYear: 2006, 
      newVolumePublishedYear: null 
    },
    { 
      title: "The Immortal Life of Henrietta Lacks", 
      author: "Rebecca Skloot", 
      genre: "Non-Fiction", 
      publishYear: 2010, 
      newVolumePublishedYear: null 
    },
    { 
      title: "The Hunger Games", 
      author: "Suzanne Collins", 
      genre: "Dystopian Fiction", 
      publishYear: 2008, 
      newVolumePublishedYear: 2009 // "Catching Fire" (sequel)
    },
    { 
      title: "The Martian", 
      author: "Andy Weir", 
      genre: "Science Fiction", 
      publishYear: 2011, 
      newVolumePublishedYear: null 
    },
    { 
      title: "Gone Girl", 
      author: "Gillian Flynn", 
      genre: "Thriller", 
      publishYear: 2012, 
      newVolumePublishedYear: null 
    },
    { 
      title: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      genre: "Classic Fiction", 
      publishYear: 1960, 
      newVolumePublishedYear: null 
    },
    { 
      title: "1984", 
      author: "George Orwell", 
      genre: "Dystopian Fiction", 
      publishYear: 1949, 
      newVolumePublishedYear: null 
    },
    { 
      title: "A Brief History of Time", 
      author: "Stephen Hawking", 
      genre: "Science", 
      publishYear: 1988, 
      newVolumePublishedYear: null 
    },
    { 
      title: "Pride and Prejudice", 
      author: "Jane Austen", 
      genre: "Classic Fiction", 
      publishYear: 1813, 
      newVolumePublishedYear: null 
    },
    { 
      title: "Sapiens: A Brief History of Humankind", 
      author: "Yuval Noah Harari", 
      genre: "Non-Fiction", 
      publishYear: 2011, 
      newVolumePublishedYear: null 
    },
    { 
      title: "The Catcher in the Rye", 
      author: "J.D. Salinger", 
      genre: "Classic Fiction", 
      publishYear: 1951, 
      newVolumePublishedYear: null 
    },
    { 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      genre: "Classic Fiction", 
      publishYear: 1925, 
      newVolumePublishedYear: null 
    },
    { 
      title: "Dune", 
      author: "Frank Herbert", 
      genre: "Science Fiction", 
      publishYear: 1965, 
      newVolumePublishedYear: 1969 // "Dune Messiah"
    },
    { 
      title: "Harry Potter and the Sorcerer's Stone", 
      author: "J.K. Rowling", 
      genre: "Fantasy", 
      publishYear: 1997, 
      newVolumePublishedYear: 1998 // "Chamber of Secrets"
    },
    { 
      title: "The Fellowship of the Ring", 
      author: "J.R.R. Tolkien", 
      genre: "Fantasy", 
      publishYear: 1954, 
      newVolumePublishedYear: 1954 // "The Two Towers" (same year)
    },
    { 
      title: "The Shining", 
      author: "Stephen King", 
      genre: "Horror", 
      publishYear: 1977, 
      newVolumePublishedYear: 2013 // "Doctor Sleep"
    },
    { 
      title: "The Da Vinci Code", 
      author: "Dan Brown", 
      genre: "Thriller", 
      publishYear: 2003, 
      newVolumePublishedYear: 2009 // "The Lost Symbol"
    },
    { 
      title: "The Alchemist", 
      author: "Paulo Coelho", 
      genre: "Fiction", 
      publishYear: 1988, 
      newVolumePublishedYear: null 
    },
    { 
      title: "Becoming", 
      author: "Michelle Obama", 
      genre: "Autobiography", 
      publishYear: 2018, 
      newVolumePublishedYear: null 
    },
    { 
      title: "Educated", 
      author: "Tara Westover", 
      genre: "Memoir", 
      publishYear: 2018, 
      newVolumePublishedYear: null 
    }
  ];
  
  

const userbook = books.filter((bk) => bk.genre === "Fiction");

console.log(userbook);

//Filter by Author
const georgeOrwellBooks = books.filter((bk) => bk.author === "George Orwell");
console.log(georgeOrwellBooks);

//Filter by Publish Year
const booksAfter2000 = books.filter((bk) => bk.publishYear > 2000);
console.log(booksAfter2000);


// Filter by Multiple Criteria (genre is "Science Fiction" and publish year after 2000)

const sciFiBooksAfter2000 = books.filter((bk) => bk.genre === "Science Fiction" && bk.publishYear > 2000);
console.log(sciFiBooksAfter2000);

//Filter by Genre and Title

const dystopianHungerBooks = books.filter((bk) => bk.genre === "Dystopian Fiction" && bk.title.includes("Hunger"));
console.log(dystopianHungerBooks);


//Filter by Author and Year Range
const collinsBooks2005to2015 = books.filter((bk) => bk.author === "Suzanne Collins" && bk.publishYear >= 2005 && bk.publishYear <= 2015);
console.log(collinsBooks2005to2015);


// Filter by Titles Not Containing a Specific Word

const booksWithoutTheInTitle = books.filter((bk) => !bk.title.includes("The"));
console.log(booksWithoutTheInTitle);

