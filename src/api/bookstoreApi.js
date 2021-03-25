export default class BookstoreApi {
  constructor() {
    this._apiBase = `http://private-f12c3-bookstore.apiary-mock.com/`;
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllBooks = () => {
    return this.getResource(`books`);
  }

  getBook = (isbn) => {
    return this.getResource(`books/${isbn}`);
  }
}
