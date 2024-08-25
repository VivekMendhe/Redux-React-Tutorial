import { BUY_BOOK, SELL_BOOK } from "./BookType";

// Define the action types
export interface BuyBookAction {
  type: typeof BUY_BOOK;
}

export interface SellBookAction {
  type: typeof SELL_BOOK;
}

// Union type for all actions
export type BookAction = BuyBookAction | SellBookAction;

// Action creators with type annotations
export const purchaseBooks = (): BuyBookAction => ({
  type: BUY_BOOK,
});

export const sellBooks = (): SellBookAction => ({
  type: SELL_BOOK,
});
