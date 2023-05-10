import React, { useState } from "react";
import Header from "./Components/header-folder/Header";
import Main from "./Components/main-folder/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from "./Components/main-folder/card-page/Cardpage";
import Footer from "./Components/footer-folder/Footer";






function App() {

  const [amountInWork, setAmountInWork] = useState('')
  const [amountFinished, setAmounttFinished] = useState('')

  const taskInWork = (value) => {
    setAmountInWork(value)
  }

  const taskFinished = (value) => {
    setAmounttFinished(value)
  }

  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<Main amountInWork={amountInWork} taskInWork={taskInWork} taskFinished={taskFinished} />}/>
            <Route path="/card/:id" element={<CardPage />}/>
          </Routes>
      </Router>
      <Footer amountFinished={amountFinished} amountInWork={amountInWork}/>
    </div>
  );
}

export default App;
