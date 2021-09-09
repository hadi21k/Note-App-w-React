import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./page/Notes";
import Note from "./page/Note";
function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={Notes} />
          <Route path="/note/:id" component={Note} />
        </div>
      </div>
    </Router>
  );
}

export default App;
