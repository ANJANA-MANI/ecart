
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Wishlist from './Components/Wishlist';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Cart" element={<Cart/>}/>
     </Routes>

    </div>
  );
}

export default App;
