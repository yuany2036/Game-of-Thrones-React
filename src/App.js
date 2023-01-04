import { CharacterContextProvider } from "./context/CharacterContext";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersList from "./Component/CharactersList/CharactersList";
import NavBar from "./Component/NavBar/NavBar";
import CharacterBio from "./Component/CharacterBio/CharacterBio";
// import InfoHouse from "./Component/InfoHouse";

function App() {
  return (
    <BrowserRouter>
      <CharacterContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/:name" element={<CharacterBio />} />
        </Routes>
      </CharacterContextProvider>
    </BrowserRouter>
  );
}

export default App;
