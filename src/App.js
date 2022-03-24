import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Hearder/Header';
import Meal from './Components/Meal/Meal';
import { useState } from 'react';

function App() {
  const [carts, setCarts] = useState(0);
  const setCartCounts = () => {
    setCarts(carts + 1)
  }
  return (
    <div className="App">
      <Header carts={carts}></Header>
      <Meal setCartCounts={setCartCounts}></Meal>


    </div>
  );
}

export default App;
