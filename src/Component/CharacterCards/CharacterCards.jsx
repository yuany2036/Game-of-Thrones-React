import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CharacterContext from "../../context/CharacterContext";
import ContainerWrapper from "../ContainerWrapper";
// import { Route, Routes } from "react-router-dom";

const CharacterCards = () => {
  const { setCharacter, filteredCharacters, setSearchField } =
    useContext(CharacterContext);
  const navigate = useNavigate();

  if (!filteredCharacters[0]) return <h1>Loading</h1>;

  const characterClickHandler = (e) => {
    let selectedChar = e.target.closest("div").querySelector("h4").textContent;
    setCharacter(
      filteredCharacters.filter((char) => char.name.includes(selectedChar))[0]
    );
    setSearchField("");
    navigate(`/${selectedChar.replace(" ", "_")}`);
  };

  return (
    <>
      {filteredCharacters.map((char) => {
        return (
          <ContainerWrapper
            key={Math.random() + char.name}
            className="characterPreview"
          >
            <img
              onClick={characterClickHandler}
              src={char.image}
              alt={`${char.name} in Game of thrones`}
            />
            <h4>{char.name}</h4>
          </ContainerWrapper>
        );
      })}
    </>
  );
};

export default CharacterCards;
