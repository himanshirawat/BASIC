import React from 'react';
import './App.css';
import Sidebar from './screens/Sidebar';
import Main from './screens/Main';
import Mobile from './screens/Mobile';

function App() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />   
      <Main />
      <Mobile />
    </div>
  );
}

export default App;
