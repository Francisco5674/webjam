import brand from '../img/cocktail.svg'
const Nav = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <div className="navbar-item" href="https://bulma.io" >
          <img src={brand} alt="Page Logo" width="32" height="32" style={{fill: "red"}}/>
        </div>
    </div>
  </nav>
  );
}

export default Nav