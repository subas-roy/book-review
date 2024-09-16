const getFromLocalStorage = (key) => {
  const storedBook = localStorage.getItem(key);
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
}

const saveToLocalStorage = (key, id) => {
  const storedBooks = getFromLocalStorage(key);
  const exists = storedBooks.find(book => book.bookId === id)
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem(key, JSON.stringify(storedBooks));
  }
}

export {getFromLocalStorage, saveToLocalStorage};