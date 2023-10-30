import './App.css';
import Blob from './Component/Blob/Blob';
import Blob2 from './Component/Blob2/Blob2';
import LiveBox from './Component/Livebox/LiveBox';
import Nav from './Component/Nav/Nav';
import Wrapper from './Component/Wrapper/Wrapper';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <Nav/>
   <Blob/>
   <Blob2/>
   <Routes>
      <Route path='/' element={<Wrapper/>}/>
      <Route path='/live' element={<LiveBox/>}/>
   </Routes>
   </>
  );
}

export default App;
