import Header from "./components/header";
import Rytbar from "./components/Rytbar";
import Leftside from "./components/leftside";
import Progressbar from "./musicplayer/progressbar";


function App() {
  const getdata=()=>{

  }
  return (
    <>
    
    <div className=" w-full h-screen bg-teal-300">
      <div className="">
        <Header/>
      </div>
      
      <div className="w-full">  
        <div className=" w-4/6 h-[40.6rem] mt-16 float-left shadow-md">
          <Leftside  data={getdata}/>
        </div>   
        <div className="w-2/6 h-[40.6rem] mt-16 float-right shadow-md">
          <Rytbar/>
        </div>
      </div>
      <div className="h-screen w-full">
          <Progressbar/>
          
     
        
      </div>
    </div>
    
    
    
    </>
  );
}

export default App;
