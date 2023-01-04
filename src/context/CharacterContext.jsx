// import { useContext } from "react";
import { useEffect, useState, createContext } from "react";

const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.got.show/api/general/characters");
        const data = await res.json();
        setCharacters(data.show);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [searchField, characters]);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        character,
        setCharacter,
        filteredCharacters,
        setSearchField,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
