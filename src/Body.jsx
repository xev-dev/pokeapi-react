import { useEffect, useState } from "react";
import Card from "./Card.jsx";
function Body({ searchValue }) {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      json.results.forEach((element, index) => {
        element.index = index + 1;
      });
      setPokemons(json.results);
      setFilteredPokemons(json.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchValue.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [searchValue]);

  return (
    <div className="cardContainer">
      {filteredPokemons.map((pokemon) => (
        <Card
          key={pokemon.index}
          name={pokemon.name}
          url={pokemon.url}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.index}.svg`}
        />
      ))}
    </div>
  );
}
export default Body;
