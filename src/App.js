import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import MobileHeader from "./Components/MobileHeader/MobileHeader";

import productContext from "./Contexts/ProductContext";
import products from "./productsData";


function App() {
  const [allProducts,setAllProducts]=useState(products)
const [userCart,setUserCart]=useState([])
  return (
 <div className="font-DanaMedium bg-gray-100 dark:bg-zinc-800">
 <productContext.Provider value={{allProducts,userCart,setUserCart}}>
 <Header/>
 <MobileHeader/>
 <Main/>
 <Footer/>
 </productContext.Provider>
 </div>
  );
}

export default App;
