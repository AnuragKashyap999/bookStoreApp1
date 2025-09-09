import React from 'react';
import Home from './home/Home.jsx';
import {Navigate, Route , Routes } from "react-router-dom";
import Courses from './courses/courses.jsx';
import Signup from './component/Signup.jsx';
import Contact from './component/Contact.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';


function App() {
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);

  return (
<>

 <div className="dark-bg-slate-900 dark:text-white">
<Routes >
  <Route path="/" element={<Home/>}/>
  <Route path="/course" 
  element={authUser ? <Courses/> : <Navigate to="/signup" /> } />
  <Route path="/contact" element={<Contact/> }/>
  <Route path="/signup" element={<Signup/> }/> 
</Routes>
<Toaster/>
 </div>

</>
  );
}

export default App;
