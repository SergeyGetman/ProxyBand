import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Contact from './pages/contact';
import About from './components/About';
import Instagramm from './components/Instagramm';
import LinkTo from './components/LinkTo';

function Navigation() {
  return (
    <nav>
      <LinkTo exact path="/" component={HomePage} />
      <LinkTo exact path="/contact" component={Contact} />
      <LinkTo exact path="/about" component={About} />
      <LinkTo exact path="/login" component={LoginPage} />
      <LinkTo exact path="/register" component={RegisterPage} />
      <LinkTo exact path="/insta-users" component={Instagramm} />
    </nav>
  );
}

export default Navigation;
