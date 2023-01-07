import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CharacterContext from "../../context/CharacterContext";
import InfoContainer from "../InfoContainer/InfoContainer";
import styles from "./CharacterBio.module.scss";
import backButton from "../../img/backbutton.png";

const CharacterBio = () => {
  const { character } = useContext(CharacterContext);

  console.log(character);

  // prettier-ignore
  const {age, culture, origin, religion, siblings, name, image, actor, alive, allegiances, death, gender, house} = character;

  const characterDataArray = [
    { title: "Played by", content: actor },
    { title: "Age", content: age?.age },
    { title: "Culture", content: culture },
    { title: "Religion", content: religion },
    { title: "Gender", content: gender },
    { title: "House", content: house },
    { title: "From", content: origin },
    { title: "Allegiances", content: allegiances },
    { title: "Siblings", content: siblings },
  ];

  console.log(characterDataArray);

  return (
    <main className={styles.main}>
      <NavLink to="/characters">
        <img
          className={styles.backButton}
          title="Back to characters"
          src={backButton}
          alt="back button"
        />
      </NavLink>
      <img className={styles.image} src={image} alt={`${name}`} />
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.text}>
        {characterDataArray.map(({ title, content }) => (
          <InfoContainer key={title} title={title} content={content} />
        ))}
        {!alive ? <InfoContainer title="Died in" content={death} /> : ""}
      </div>
    </main>
  );
};

export default CharacterBio;
