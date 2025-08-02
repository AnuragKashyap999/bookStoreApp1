import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    handleClose();

    // Add your login logic here, like calling an API
  };

  const handleClose = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) modal.close();
  };

  return (
    <div >
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white" >
          <form onSubmit={handleSubmit(onSubmit)} method="dialog"  >
            {/* Close Button */}
            <Link
              onClick={handleClose}
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mt-4">Login</h3>

            <div className="mt-4 space-y-4">
              {/* Email */}
              <div>
                <span>Email</span>
                <br/>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-4">
                <span>Password</span>
                <br/>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
              </div>
            </div>

            {/* Submit and Signup Link */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200 cursor-pointer"
              >
                Login
              </button>
              <span>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
