import { BUY_BOOK, SELL_BOOK } from "./BookType";
import { BookAction } from "./BookAction";

// Define the shape of your state
interface BookState {
  NumberOfBooks: number;
}

// Initial state
const initState: BookState = {
  NumberOfBooks: 20,
};

const BookReducer = (state: BookState = initState, action: BookAction): BookState => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1,
      };

    case SELL_BOOK:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks + 1,
      };

    default:
      return state;
  }
};

export default BookReducer;
