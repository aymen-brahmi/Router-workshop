import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navi from "./components/Navi";
import Profiles from "./components/Profiles";
import {Switch,Route} from 'react-router-dom';
import {Users} from './components/Users';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <Navi />
      <Switch>
       <Route exact path="/" component={Home} />
       {/* <Route path="/Profiles" >
       <Profiles Users={Users}/>
         </Route> */}
        <Route path="/Profiles" render={() =><Profiles Users={Users}/>} />
        <Route path="/Details/:id" render={(props) =><Details {...props} Users={Users} />} />
       <Route path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
