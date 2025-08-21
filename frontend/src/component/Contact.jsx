import React from 'react'
import { useForm } from 'react-hook-form';
import Navbar  from './Navbar.jsx';
import Footer from './Footer.jsx';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log('Form Data:', data);
      // Add your login logic here, like calling an API
    };
  return (
    <>
    <Navbar/>
    <div className='flex h-screen  items-center justify-center  '>
    <form onSubmit={handleSubmit(onSubmit)} >
    <h1 className=" text-xl sm:text-4xl font-bold ">Contact Us</h1>
    <div >
      {/* Name */}
      <div className='mt-4'>
        <span>Name</span>         
        <br/>
        <input
          type='text'
          placeholder='Enter your fullname'
          className='w-80 sm:w-120 px-3 py-1 border rounded-md outline-none'
          {...register("name", { required: true })}
        />
        <br/>
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

      </div>

      {/* Email */}
      <div  className='mt-4 '>
        <span >Email</span>         
        <br/>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-80 sm:w-120 px-3 py-1 border rounded-md outline-none'
          {...register("email", { required: true })}
        />
         <br/>
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

      </div>
      
      <div className="mt-4">
      <span>Message</span>
      <br/>
      <textarea 
      className="w-80 sm:w-120 px-3 py-1 border rounded-md outline-none   " 
      placeholder="Enter your message..." 
      maxLength="100"
      rows="4"
      {...register('message', { required: 'Message is required' })}
      />
       <br />
       {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

      

      </div>
      </div>

    {/* Button */}
   <button className='btn btn-active btn-info mt-4'>submit</button>
    </form>
    </div>
    <Footer/>
    </>
    
  )
}

export default Contact;
