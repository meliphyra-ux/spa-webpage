import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import CardBlock from './components/CardBlock'
import ResultBlock from './components/ResultBlock';

function App() {
  return (
    <main className="App">
        <Header />
        <Main />
        <CardBlock />
        <ResultBlock />
    </main>
  );
}

export default App;
