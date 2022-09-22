import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Player from "./pages/Player";
import Sports from "./components/sports";
import Medical from "./pages/Medical";
import { client } from "./config/config.js";
import { ApolloProvider, InMemoryCache } from "@apollo/client";
import { Group } from "antd/lib/avatar";
import Groups from "./pages/Group";
import Event from "./pages/Event";
function App() {

  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn}  />
          <Main>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Tables} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/athlete" component={Player}></Route>
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/medical" component={Medical} />
            <Route exact path="/groups" component={Groups} />
            <Route exact path="/events" component={Event} />



            {/* <Redirect from='*' to='/dashboard' /> */}
          </Main>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
