import styles from "./InfoContainer.module.scss";

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const InfoContainer = ({ title, content }) => {
  if (typeof content === "string") {
    content = capitalize(content);
  }
  return (
    <div className={styles.infoContainer}>
      <h4 className={styles.title}>{title}</h4>
      {Array.isArray(content) && !content.includes("") && content.length > 0 ? (
        content.map((el) => (
          <p className={styles.content} key={el}>
            {el}
          </p>
        ))
      ) : (Array.isArray(content) && content.length < 2) ||
        content === null ||
        content === undefined ? (
        <p className={styles.content}>No data available</p>
      ) : (
        <p className={styles.content}>{content}</p>
      )}
    </div>
  );
};

export default InfoContainer;
