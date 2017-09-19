import React from 'react';
import SessionFormContainer from "./session_form/session_form_container";
import BenchIndexContainer from "./benches/bench_index_container";

const App = () => (
  <div>
    <header>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;
