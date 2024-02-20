import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Routes from './Routes';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
