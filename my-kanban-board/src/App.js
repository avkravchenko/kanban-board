import React from "react";
import Header from "./Components/header-folder/Header";
import Main from "./Components/main-folder/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from "./Components/main-folder/card-page/Cardpage";





function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/card/:id" element={<CardPage />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
