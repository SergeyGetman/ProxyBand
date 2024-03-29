import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Contact from "./pages/contact";
import About from "./components/About";
import Instagramm from "./components/Instagramm";


function App() {
  return (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/register' component={RegisterPage}/>
        <Route exact path='/insta-users' component={Instagramm}/>
    </Switch>
  );
}

export default App;
