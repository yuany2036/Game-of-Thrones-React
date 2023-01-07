import { CharacterContextProvider } from "./context/CharacterContext";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersList from "./Component/CharactersList/CharactersList";
import NavBar from "./Component/NavBar/NavBar";
import CharacterBio from "./Component/CharacterBio/CharacterBio";
import Home from "./Component/Home/Home";
import Gallery from "./Component/Gallery/Gallery";
import { GalleryContextProvider } from "./context/GalleryContext";
// import InfoHouse from "./Component/InfoHouse";

function App() {
  return (
    <BrowserRouter>
      <CharacterContextProvider>
        <GalleryContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersList />} />
            <Route path="/characters/:name" element={<CharacterBio />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </GalleryContextProvider>
      </CharacterContextProvider>
    </BrowserRouter>
  );
}

export default App;
