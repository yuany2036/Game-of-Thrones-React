import { useContext } from "react";
import CharacterContext from "../../context/CharacterContext";

const CharacterBio = () => {
  const { character } = useContext(CharacterContext);
  const {
    name,
    image,
    actor,
    alive,
    allegiances,
    death,
    gender,
    house,
    titles,
  } = character;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={`${name}`} />
      <h5>Played by</h5>
      <p>{actor}</p>
      {!alive ? (
        <>
          <h5>Died in</h5>
          <p>{death}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CharacterBio;
