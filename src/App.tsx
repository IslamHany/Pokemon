import { Switch, Route, Redirect } from "wouter";
import PaginationView from "./Pages/PaginationView";
import PokemonView from "./Pages/PokemonView";

function App() {
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/pagination" />} />
      <Route path="/pokemon/:id" component={PokemonView} />
      <Route path="/pagination" component={PaginationView} />
    </Switch>
  );
}

export default App
