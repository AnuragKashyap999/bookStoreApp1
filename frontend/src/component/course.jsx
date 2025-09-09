import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from "axios";
import {Link} from 'react-router-dom';

function Course() {
  const [book , setBook]=useState([])
  useEffect(()=>{
     const getBook = async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      }catch(error){
        console.log(error)
      }
     }
     getBook();
  },[])
  return (
    <>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-16 items-center justify-center text-center '>
        <h1 className='py-12 text-2xl  md:text-4xl '>
          We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia temporibus perferendis quam, 
          repellendus accusantium quae accusamus! Laborum deserunt doloremque rerum accusamus similique? 
          Laboriosam velit earum voluptates nostrum, quod voluptatibus ea. Lorem ipsum dolor sit amet 
          consectetur adipisicing elit.Nobis ad quasi libero! Unde sed ratione incidunt, voluptatum 
          blanditiis cum alias asperiores eius illo rerum eaque obcaecati temporibus consequuntur tempore
          recusandae?
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700'>
          Back</button>
        </Link>
      </div>
      <div className='p-4 justify-evenlyspace-x-2 mt-12  grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=>(
           <Card key ={item.id} item = {item}/>
          ))
        }
      </div>
    </div>
    
    </>
  )
}

export default Course;
