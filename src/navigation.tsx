import LinkTo from './components/LinkTo';

function Navigation() {
  return (
    <nav>
      <LinkTo href="/" text="home" />
      <LinkTo href="/contact" text="contacts" />
      <LinkTo href="/about" text="about" />
      <LinkTo href="/login" text="login" />
      <LinkTo href="/register" text="register" />
      <LinkTo href="/insta-users" text="insta-users" />
    </nav>
  );
}

export default Navigation;
