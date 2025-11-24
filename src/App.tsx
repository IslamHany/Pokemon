import { Switch, Route, Redirect } from "wouter";
import PaginationView from "./Pages/PaginationView";
import PokemonView from "./Pages/PokemonView";
import LoadMoreView from "./Pages/LoadMoreView";

function App() {
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/pagination" />} />
      <Route path="/pokemon/:id" component={PokemonView} />
      <Route path="/pagination" component={PaginationView} />
      <Route path="/loadmore" component={LoadMoreView} />
    </Switch>
  );
}

export default App
