import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "../../routes/Notes/Notes";
import Note from "../../routes/Note/Note";
import Add from "../../routes/Add/Add";
import Edit from "../../routes/Edit/Edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Notes} />
        <Route path="/add" component={Add} />
        <Route path="/note/:id" component={Note} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
