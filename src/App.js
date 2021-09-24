import React from 'react';
import { Header } from './Header';
import { Search } from './Search';
import { Main } from './Main';
import { Footer } from './Footer';
import { useGlobalContext } from './context';
import './App.css';

function App() {
  const {showModal} = useGlobalContext();
  return (
    <main className="main">
      <Header />
      {showModal && <Search />}
      <Main />
      <Footer />
    </main>
  );
}

export default App;
