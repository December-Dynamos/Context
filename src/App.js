import Hello from "./Components/Hello";
import Hii from "./Components/Hii";
import Hey from "./Components/Hey";

import CricketProvider from "./context/CricketProvider";

function App() {

  return (
    <div>
         <CricketProvider>
           <Hello />

           <Hii />

            <Hey />
         </CricketProvider>
          

      


      

      
    </div>
  );
}

export default App;
