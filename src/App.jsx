import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Locations from "./pages/Locations";
import Species from "./pages/Species";


const App = () => {
  return (
    <BrowserRouter>
    <main className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/species">
          <Species />
        </Route>
      </Switch>
    </main>
    </BrowserRouter>
  )
};

export default App;
