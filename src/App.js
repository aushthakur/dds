import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Other components */}
    </div>
  );
}

export default App;
