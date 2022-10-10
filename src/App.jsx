import './App.css';
import React, { Suspense } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const CardBlock = React.lazy(() => import('./components/CardBlock'))

function App() {
  return (
    <main className="App">
        <Header />
        <Main />
        <Suspense fallback={<div>Loading...</div>}>
          <CardBlock />
        </Suspense>
    </main>
  );
}

export default App;
