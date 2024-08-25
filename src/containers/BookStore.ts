import { createStore } from "redux";
import BookReducer from "./BookReducer";

// Create the Redux store
const store = createStore(BookReducer);

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
