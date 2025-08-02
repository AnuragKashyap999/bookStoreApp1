import React from 'react';
import Navbar from '../component/Navbar';
import Course from '../component/course';
import Footer from '../component/Footer';
function courses() {
  return (
    <>
    
    <Navbar/>
    <div className='min-h-screen '>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}
export default courses;
