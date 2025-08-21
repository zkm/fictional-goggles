import React from "react";
import { BASE_DOMAIN } from "../api/OpenLibraryClient";
import coverPlaceholder from "../assets/no-book-cover-available.jpg";

const Book = ({ book, addToBookShelf, showAdd = true, isAdded = false }) => {
  const { title, author_name, cover_i } = book;
  const hasCover = typeof cover_i === "number" && cover_i > 0;

  return (
  <article className="card group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 shadow-sm transition-transform transition-shadow duration-150 hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md focus-within:ring-2 focus-within:ring-indigo-600/30">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 grid place-items-center ring-1 ring-inset ring-transparent group-hover:ring-indigo-500/20">
        {isAdded && (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-emerald-600 text-white text-[10px] font-medium px-2 py-0.5 shadow-sm select-none">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            On shelf
          </span>
        )}
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
        <h3 className="font-medium leading-snug text-gray-900 dark:text-gray-100">{title}</h3>
        {author_name && (
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-0.5">by {author_name.join(", ")}</p>
        )}
      </div>
      {showAdd && (
        <div className="mt-3">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 disabled:opacity-60 transition-colors duration-150 ${
              isAdded
                ? 'bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800'
            }`}
            onClick={() => !isAdded && addToBookShelf(book)}
            aria-label={isAdded ? `${title} already on bookshelf` : `Add ${title} to bookshelf`}
            aria-disabled={isAdded}
            disabled={isAdded}
          >
            {isAdded ? 'Added' : 'Add Book'}
          </button>
        </div>
      )}
    </article>
  );
};

export default Book;
