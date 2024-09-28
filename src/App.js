import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import MobileHeader from "./Components/MobileHeader/MobileHeader";



function App() {
  return (
 <div className="font-DanaMedium bg-gray-100 dark:bg-zinc-800">
 <Header/>
 <MobileHeader/>
 <Main/>
 <Footer/>
 </div>
  );
}

export default App;
