import React from 'react'
import { Link,  useLocation, useNavigate} from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';



function Signup() {
  const location = useLocation()
  const navigate = useNavigate();
  const from= location.state?.form?.pathname || "/"
  const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = async (data) => {
      const userInfo= {
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
  
      // Add your login logic here, like calling an API
      await axios.post("http://localhost:4001/users/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
         toast.success("Signup Successfully ");
         navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err)=>{
        if(err.response){
          toast.error("Error:"+err.response.data.message);
        }
      })
    };
  return (
  <>
  <div className='flex h-screen items-center justify-center '>
  <div id="my_model_3" className="w-[400px]  relative bg-white p-6 rounded-md shadow-md dark:bg-slate-900 dark:text-white">
    {/* Close Button in Top-Right */}
    
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <Link
      to="/"
      className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
    >
      ✕
    </Link>

    <h3 className="font-bold text-lg">Signup</h3>

    <div >
      {/* Name */}
      <div className='mt-4 space-y-2'>
        <span>Name</span>         
        <br/>
        <input
          type='text'
          placeholder='Enter your fullname'
          className='w-80 px-3 py-1 border rounded-md outline-none'
          {...register("fullname", { required: true })}
        />
        <br/>
        {errors.fullname && <span className="text-red-500 text-sm">Name is required</span>}

      </div>

      {/* Email */}
      <div  className='mt-4 space-y-2'>
        <span >Email</span>         
        <br/>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-80 px-3 py-1 border rounded-md outline-none'
          {...register("email", { required: true })}
        />
         <br/>
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

      </div>

      {/* Password */}
      <div  className='mt-4 space-y-2'>
        <span>Password</span>         
        <br/>
        <input
          type='password'
          placeholder='Enter your Password'
          className='w-80 px-3 py-1 border rounded-md outline-none'
          {...register("password", { required: true })}
        />
         <br/>
        {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
      </div>
    </div>

    {/* Button */}
      <div className="flex justify-around mt-4">
        <button
          type="submit"
          className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200 cursor-pointer"
          >
          Signup
        </button>
        <span>
        Have account? {" "}
        <button
          className='underline text-blue-500 cursor-pointer ml-1'
          onClick={() =>
            document.getElementById("my_modal_3").showModal() 
          }  
        >
        Login
        </button>
        </span>
        </div>
    </form>
     <Login />
  </div>
</div>
  
  </>
  )
}

export default Signup;


