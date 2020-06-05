const masterBookList = [
    {
        id: 1,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Productivity",
    },
    {
        id: 2,
        title: "Jab Jab Jab Right Hook",
        author: "Gary Vaynerchuk",
        category: "Marketing",
    },
    {
        id: 3,
        title: "How to win friends and influence people",
        author: "Dale Carnegie",
        category: "Self Help",
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Productivity",
    },
    {
        id: 5,
        title: "Steve Jobs",
        author: "Walter Issacson",
        category: "Biography",
    },
];

export function getBooks(searchString = "") {
    return masterBookList.filter((book) =>
        book.title.toUpperCase().includes(searchString.toUpperCase())
    );
}

export function addBook(book) {
    masterBookList.unshift(
        Object.assign({}, book, { id: masterBookList.length + 1 })
    );
}
