
import './App.css'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'

import { BrowserRouter } from 'react-router-dom';

import { Routes,Route} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
 
  return (
    <>
    {/* <SignUp/>
    <SignIn/> */}
    
    <BrowserRouter>
     <Routes>
       <Route path="/SignIn" element={<SignIn/>} />
       <Route path="/SignUp" element={<SignUp/>} />
       <Route path="/Dashboard" element={<Dashboard/>} />

     </Routes>
   </BrowserRouter>
   </>

   
 

    
  )
}

export default App
