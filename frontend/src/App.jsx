import React from 'react';
import Home from './home/Home';
import { Route , Routes } from "react-router-dom";
import Courses from './courses/courses';
import Signup from './component/Signup';
import Contact from './component/Contact';


function App() {
  return (
<>

 <div className="dark-bg-slate-900 dark:text-white">
<Routes >
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<Courses/> }/>
  <Route path="/contact" element={<Contact/> }/>
  <Route path="/signup" element={<Signup/> }/> 
</Routes>
 </div>

</>
  );
}

export default App;
