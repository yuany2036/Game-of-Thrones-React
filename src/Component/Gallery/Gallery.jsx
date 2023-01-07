import { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";
import { images } from "./imagesrc";
import styles from "./Gallery.module.scss";
import Modal from "./Modal/Modal";

const Gallery = () => {
  const { imageClickHandler, showModal } = useContext(GalleryContext);

  return (
    <main className={styles.main} onClick={imageClickHandler}>
      {images.map((image) => {
        return (
          <img
            key={Math.random()}
            className={`img ${styles.image}`}
            src={image}
            alt="GoT"
          />
        );
      })}
      {showModal && <Modal />}
    </main>
  );
};

export default Gallery;
