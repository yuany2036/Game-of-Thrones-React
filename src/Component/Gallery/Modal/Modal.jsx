import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import GalleryContext from "../../../context/GalleryContext";
import styles from "./Modal.module.scss";
import { images } from "../imagesrc";

const Modal = () => {
  const { closeModal, modalImg, nextImg, prevImg, imgNum, dotClickHandler } =
    useContext(GalleryContext);

  // const body = document.querySelector("body");
  // console.log(imgNum);

  // const keyDownHandler = (e) => {
  //   console.log(e);
  //   if (e.key === "ArrowRight") nextImg();
  //   else if (e.key === "ArrowLeft") prevImg();
  //   else if (e.key === "Escape") closeModal();
  //   else return;
  // };

  // useEffect(() => {
  //   body.addEventListener("keypress", keyDownHandler);
  // }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.overlay} onClick={closeModal}></div>,
        document.getElementById("overlayRoot")
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <main className={styles.mainContainer}>
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
          </main>
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => dotClickHandler(index)}
                className={`${styles.dots} ${
                  index === imgNum && styles.active
                }`}
              />
            ))}
          </div>
        </div>,
        document.getElementById("modalRoot")
      )}
    </>
  );
};

export default Modal;
