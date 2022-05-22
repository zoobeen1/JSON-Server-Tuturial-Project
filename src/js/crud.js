const BASE_URL = 'http://localhost:3000';
//create
function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}
//read
function getBooks() {
  return fetch(`${BASE_URL}/books`).then(resp => resp.json());
}
function getBook(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(resp => resp.json());
}
//update
function patchBook(bookId, params) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
function putBook(bookId, params) {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
//delete
function deleteBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(res => res.json());
}
export default { addBook, getBook, getBooks, patchBook, putBook, deleteBook };
