import React from 'react';
import BookList from '../features/bookList/BookList';

export default function HomePage() {
  return (
    <div className="d-flex">
      <BookList />
    </div>
  );
}