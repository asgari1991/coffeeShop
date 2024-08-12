import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import MobileHeader from "./Components/MobileHeader/MobileHeader";



function App() {
  return (
 <div className="font-DanaMedium bg-gray-100 dark:bg-zinc-800 h-[2000px]">
 <Header/>
 <MobileHeader/>
 <Main/>
 </div>
  );
}

export default App;
