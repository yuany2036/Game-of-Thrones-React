import { createContext, useState } from "react";
import { images } from "../Component/Gallery/imagesrc";

const GalleryContext = createContext();

export const GalleryContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [imgNum, setImgNum] = useState();

  const numOfImg = images.length;

  const nextImg = () => {
    if (imgNum + 1 === numOfImg) return;
    setImgNum((pre) => pre + 1);
    setModalImg(images[imgNum + 1]);
  };
  const prevImg = () => {
    if (imgNum === 0) return;
    setImgNum((pre) => pre - 1);
    setModalImg(images[imgNum - 1]);
  };

  const dotClickHandler = (index) => {
    setImgNum(index);
    setModalImg(images[index]);
  };

  const imageClickHandler = (e) => {
    if (e.target.tagName === "IMG") {
      setModalImg(e.target.src);
      setImgNum(images.findIndex((el) => el === e.target.src));
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <GalleryContext.Provider
      value={{
        showModal,
        setShowModal,
        modalImg,
        setModalImg,
        imgNum,
        setImgNum,
        nextImg,
        prevImg,
        imageClickHandler,
        closeModal,
        dotClickHandler,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
