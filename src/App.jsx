import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import CardBlock from './components/CardBlock'
import TemplateBlock from "./components/TemplateBlock";
import resultBg from "./assets/images/resultBg.svg"
import marketingBg from "./assets/images/marketingBg.svg"
import costBg from "./assets/images/costBg.svg"
import FAQ from "./components/FAQ";


function App() {
  return (
    <main className="App">
        <Header />
        <Main />
        <CardBlock />
        <TemplateBlock
            title="The content marketing service focused on RESULTS"
            text="List a product once and it will be published across all of your connected sales channels. Similarly, when you make changes to your listing"
            backgroundImg={resultBg}
            aside={true}
        />
        <TemplateBlock
            title="What you get with our content marketing for startups service"
            text="List a product once and it will be published across all of your connected sales channels. Similarly, when you make changes to your listing"
            backgroundImg={marketingBg}
        />
        <TemplateBlock
            title="Our Content Writing & Marketing Service costs $2,500/month."
            text="List a product once and it will be published across all of your connected sales channels. Similarly, when you make changes to your listing"
            backgroundImg={costBg}
            aside={true}
        />
        <FAQ />
    </main>
  );
}

export default App;
