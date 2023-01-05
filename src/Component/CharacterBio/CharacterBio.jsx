import { useContext } from "react";
import CharacterContext from "../../context/CharacterContext";
import styles from "./CharacterBio.module.scss";

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
    <main className={styles.main}>
      <img className={styles.image} src={image} alt={`${name}`} />
      <h1 className={styles.name}>{name}</h1>
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
    </main>
  );
};

export default CharacterBio;
