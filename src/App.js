// import Calculator from "./Components/Calculator";
import Calculator from "./Components/Calculator";
import Header from "./Components/Header";


function App() {
  
  return (
    <div className="h-screen p-10 md:p-20 items-center justify-center flex" >
      {/* <Header/> */}
      <div className="rounded-xl shadow-2xl flex flex-col md:flex-row p-10 md:space-x-10   items-center justify-center bg-slate-100">
        <Header/>
        <Calculator/>
        </div>
    </div>
  );
}

export default App;
