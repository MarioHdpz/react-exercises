import React from 'react';
import './App.css';
import RealTimeSum from './components/RealTimeSum';

function App() {
  return (
    <div className="main">
      <RealTimeSum numberOfCounters={4} />
    </div>
  );
}

export default App;
