import React from "react";
import { BASE_DOMAIN } from "../api/OpenLibraryClient";
import coverPlaceholder from "../assets/no-book-cover-available.jpg";

const Book = ({ book, addToBookShelf }) => {
  const { title, author_name, cover_i = [] } = book;
  let cover_image;

  if (cover_i.length == null && cover_i !== -1) {
    cover_image = (
      <img
        src={`https://covers.${BASE_DOMAIN}/b/id/${cover_i}.jpg`}
        alt="cover"
      />
    );
  }

  return (
    <div className="book">
      <p className="book-cover">
        {cover_image ? (
          cover_image
        ) : (
          <img src={coverPlaceholder} alt="no cover" />
        )}
      </p>
      <div className="book-content">
        <p className="book-title">{title}</p>
        {author_name && (
          <p className="book-author">by {author_name.join(", ")}</p>
        )}
      </div>
      <footer className="book-footer">
        <button onClick={() => addToBookShelf(book)}>Add Book</button>
      </footer>
    </div>
  );
};

export default Book;
