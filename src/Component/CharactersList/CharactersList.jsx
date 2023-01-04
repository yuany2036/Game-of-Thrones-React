import ContainerWrapper from "../ContainerWrapper";
import CharacterCards from "../CharacterCards/CharacterCards";
import SearchBox from "../SearchBox/SearchBox";
import { useContext } from "react";
import CharacterContext from "../../context/CharacterContext";
import style from "./CharactersList.module.scss";

const CharactersList = () => {
  const { setSearchField } = useContext(CharacterContext);

  const filterHandler = (e) => {
    // e.preventDefault();
    setSearchField(e.target.value);
  };

  return (
    <>
      <h1>Characters from A Song of Ice and Fire</h1>
      <SearchBox
        placeholder="Search character..."
        onChangeHandler={filterHandler}
        className={style.characterSearch}
      />
      <ContainerWrapper className={style.allCharacters}>
        <CharacterCards />
      </ContainerWrapper>
    </>
  );
};

export default CharactersList;
