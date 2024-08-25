import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./BookStore"; // Ensure this import is correct
import { purchaseBooks, sellBooks } from "./BookAction"; // Ensure correct import path

const BookContainer: React.FC = () => {
  const numberOfBooks = useSelector((state: RootState) => state.NumberOfBooks);
  const dispatch: AppDispatch = useDispatch(); // Use the correct type for dispatch

  return (
    <>
      <h1>BookContainer</h1>
      <h3>Number of books: {numberOfBooks}</h3>

      <button className="py-2 px-3 bg-blue-500 rounded-md" onClick={() => dispatch(purchaseBooks())}>Buy Books</button>
      <span> || </span>
      <button className="py-2 px-3 bg-blue-500 rounded-md" onClick={() => dispatch(sellBooks())}>Sell Books</button>
    </>
  );
};

export default BookContainer;
