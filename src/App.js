import { React } from "react";
import './App.css';
import NavBar from "./components/NavBar.js";
import { Header } from "./components/Header.js";
import { CardComp } from "./components/CardComp.js";
import { CartPanel } from "./components/CartPanel.js";
import { Footer } from "./components/Footer.js";
 import { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [show, setShow] = useState("none");

  return (
    <div className="App">
         {/* Navigation Bar */}
         <NavBar setShow={setShow} item={item}/>

           {/* Panel for cart */}
          <CartPanel setItem={setItem} show={show} setShow={setShow} item={item} />

         {/*Header Section */}
         <Header/>

         {/* Card */}
         <CardComp setItem={setItem} item={item}/>

         {/* Footer */}
         <Footer />
  
    </div>
  );
}

export default App;


// Rating according to value give

// Disable add to cart button when added to card

// Remove item from cart & enable add to cart

