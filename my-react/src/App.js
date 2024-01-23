import logo from './logo.svg';
import './App.css';
import {Home,Demo} from './componets/home/home';
import { Card } from './componets/home/congrats';
import { Font } from './componets/fontawesome';
import { Login } from './componets/Member';
import { Tech } from './componets/techo';
import { Imgtask } from './componets/home/super';
import { Social } from './componets/home/social';
import { Count } from './componets/count';
import { Add } from './componets/fruit';

import { Jsondetails } from './componets/Jsondetails';
import DateCalculator from './componets/date';
import { Project } from './componets/home/project';
import { Product } from './componets/home/mile';
import Calculator from './componets/home/cal1';
import { Project1 } from './componets/home/Project1';
// import { BrowserRouter ,Routes,Route } from 'react-router-dom';
// import Blogs from './componets/page/Blogs';
// import Home from './componets/page/Home';
// import NoPage from './componets/page/NoPage';
// import Layout from './componets/page/Layout';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Blogs" element={<Blogs/>}></Route>
      <Route path="*" element={<NoPage/>}></Route>

      <Route path="/" element={<Layout/>}></Route>
    
    </Routes>
    </BrowserRouter> */}
    {/* <Tech/> */}
    {/* <Count/> */}
    {/* <Add/> */}
    {/* <Calculator/> */}
    <Project1/>
    {/* <Project/> */}
    {/* <Product/> */}
    {/* <Jsondetails/> */}
   {/* <DateCalculator/> */}
    {/* <Card/>
    <Font/>
    <Login/> */}
     {/* <Imgtask/> */}
 {/* <Social/> */}
    </>
  //   <>
  //   <h1>Form</h1>
  //   <label>Name:</label><br></br>
  //   <input type="text"></input><br></br>
  //   <label>Password</label><br></br>
  //   <input type="password"></input><br></br>
  //   <button type='sumbit'>ok</button><br></br> 
  //   <a href=""><u>Forget</u> </a><br></br>
  //   <a href="">Register now</a>
  //   <Home/>
  //   <Demo/>
  //   </>
  
 );
}

export default App;
