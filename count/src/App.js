import { useState } from "react";
import Count from "./Count";




function App() {

  const[cnt,setCnt] = useState(0);
  const increment =() =>{
   setCnt(cnt+1)
  }
  const decrement =() =>{
   setCnt(cnt-1)
  }
  const reset =() =>{
   setCnt(0)
  }
  return (
 <>
  <div align ="center">
  <Count no ={cnt} inc={increment} dec={decrement} reset={reset}/>
  </div>
 </>

  );
}

export default App;
