import logoImg from "../assets/images/woman-5669334_1920.png";
function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="food image" />
          <h1>Foodorder</h1>
          <p>this is a food order project</p>
        </div>
        <nav>
          <button>Cart (0)</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
