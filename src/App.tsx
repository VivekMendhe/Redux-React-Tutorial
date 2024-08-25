import "./App.css";
import User from "./pages/User";
import { Provider } from "react-redux";
import  stores  from './containers/BookStore';
import BookContainer from "./containers/BookContainer";

function App() {
  return (
    <Provider store={stores}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <User data={{name:'Vivek'}} />
      <BookContainer/>
    </Provider>
  );
}

export default App;
