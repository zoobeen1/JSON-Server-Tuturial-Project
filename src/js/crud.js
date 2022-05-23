const BASE_URL = 'http://localhost:3000';
//create
async function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };
  const res = await fetch(`${BASE_URL}/books`, options);
  return await res.json();
}
//read
async function getBooks() {
  const resp = await fetch(`${BASE_URL}/books`);
  return await resp.json();
}
async function getBook(bookId) {
  const resp = await fetch(`${BASE_URL}/books/${bookId}`);
  return await resp.json();
}
//update
async function patchBook(bookId, params) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  };
  const res = await fetch(`${BASE_URL}/books/${bookId}`, options);
  return await res.json();
}
async function putBook(bookId, params) {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  };
  const res = await fetch(`${BASE_URL}/books/${bookId}`, options);
  return await res.json();
}
//delete
async function deleteBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  const res = await fetch(url, options);
  return await res.json();
}
export default { addBook, getBook, getBooks, patchBook, putBook, deleteBook };
