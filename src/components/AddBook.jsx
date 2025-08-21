import React, { useState } from "react";

const AddBook = () => {
  const [removedBook, addedBook] = useState(false);
  const addBook = () => {
    addedBook(!removedBook);
  };

  return (
    <div>
      <button onClick={() => addBook(true)}>
        {removedBook ? "Remove" : "Add"} Book
      </button>
    </div>
  );
};

export default AddBook;
