import ReactDOM from "react-dom";
import { useContext } from "react";
import GalleryContext from "../../../context/GalleryContext";
import styles from "./Modal.module.scss";

const Modal = () => {
  const { closeModal, modalImg, nextImg, prevImg, imgNum } =
    useContext(GalleryContext);

  console.log(imgNum);

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.overlay} onClick={closeModal}></div>,
        document.getElementById("overlayRoot")
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <div
            className={`${styles.arrowContainer} ${
              imgNum === 0 ? styles.hidden : ""
            }`}
            onClick={prevImg}
          >
            <div className={`${styles.arrow} ${styles.leftArrow}`} />
          </div>
          <img className={styles.img} src={modalImg} alt="Gallery" />
          <div
            className={`${imgNum === 8 ? styles.hidden : ""} ${
              styles.arrowContainer
            }`}
            onClick={nextImg}
          >
            <div className={`${styles.arrow} ${styles.rightArrow}`} />
          </div>
          <div className={styles.dots} />
        </div>,
        document.getElementById("modalRoot")
      )}
    </>
  );
};

export default Modal;
