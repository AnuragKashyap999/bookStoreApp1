import React from 'react';
import Home from './home/Home.jsx';
import { Route , Routes } from "react-router-dom";
import Courses from './courses/courses.jsx';
import Signup from './component/Signup.jsx';
import Contact from './component/Contact.jsx';


function App() {
  return (
<>

 <div className="dark-bg-slate-900 dark:text-white">
<Routes >
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<div>Jai shree ram  </div>}/>
  <Route path="/contact" element={<div>Jai shree ram  </div> }/>
  <Route path="/signup" element={<Signup/> }/> 
</Routes>
 </div>

</>
  );
}

export default App;
