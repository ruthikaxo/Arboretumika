import Header from "./components/header";
import MainScreen from "./components/welcome-screen";
import Porties from './components/porties.jsx'
import Footer from "./components/footer.jsx";
import FireflyOverlay from "./components/fireflies.jsx";
import { useEffect } from "react";
// import "./assets/js-animations/sine-wave.js"

import "./index.css"

export default function App(){
//   useEffect(() => {
//     console.log("hey");
//     console.log(document.getElementById("wave-canvas"));
// }
// )
  return (
    <>
      <FireflyOverlay />
      <Header />
      <MainScreen />
      <Porties />
      <Porties />
      
      <Footer />
    </>
  )
}