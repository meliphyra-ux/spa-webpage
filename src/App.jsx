import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import CardBlock from './components/CardBlock'
import ResultBlock from './components/ResultBlock';
import Marketing from "./components/Marketing";

function App() {
  return (
    <main className="App">
        <Header />
        <Main />
        <CardBlock />
        <ResultBlock />
        <Marketing />
    </main>
  );
}

export default App;
