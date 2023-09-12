import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
