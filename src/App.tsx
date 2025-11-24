import { Switch, Route, Redirect } from "wouter";
import PaginationView from "./Pages/PaginationView";

function App() {
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/pagination" />} />
      <Route path="/pagination" component={PaginationView} />
    </Switch>
  );
}

export default App
