function Header(props) {
  return (
    <div className="header">
      <h1>POKEAPI</h1>
      <input
        placeholder="Search a pokemon"
        onChange={props.handleInput}
        type="text"
      />
    </div>
  );
}
export default Header;
