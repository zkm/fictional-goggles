import React from "react";
import { BASE_DOMAIN } from "../api/OpenLibraryClient";
import coverPlaceholder from "../assets/no-book-cover-available.jpg";

const Book = ({ book, addToBookShelf }) => {
  const { title, author_name, cover_i } = book;
  const hasCover = typeof cover_i === "number" && cover_i > 0;

  return (
    <article className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 shadow-sm">
      <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 grid place-items-center">
        {hasCover ? (
          // Decorative cover; title is announced nearby
          <img
            src={`https://covers.${BASE_DOMAIN}/b/id/${cover_i}.jpg`}
            alt=""
            role="presentation"
            className="h-full w-auto object-cover"
            loading="lazy"
          />
        ) : (
          <img
            src={coverPlaceholder}
            alt="No cover available"
            className="h-full w-auto object-contain opacity-80"
            loading="lazy"
          />
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-medium leading-snug">{title}</h3>
        {author_name && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">by {author_name.join(", ")}</p>
        )}
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50"
          onClick={() => addToBookShelf(book)}
          aria-label={`Add ${title} to bookshelf`}
        >
          Add Book
        </button>
      </div>
    </article>
  );
};

export default Book;
