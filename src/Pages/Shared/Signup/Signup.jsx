import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersauthContext } from "../Userscontext/UsersContext";

const Signup = () => {
  const { user, createUser } = useContext(UsersauthContext);
  console.log(createUser);

  const signuphandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password,name)
      .then((result) => {
        const loogedUser = result.user;
        form.reset();
        console.log(loogedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" ">
      <div className="lg:full sm:w-full ">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              SignUp
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={signuphandle}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your User Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">BIO</span>
                </label>
                <input
                  type="text"
                  name="bio"
                  placeholder="Enter Your BIO"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm bg-neutral text-neutral-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="mt-6  text-sm ">
              <Link to="/login">
                <p className=" link link-hover btn-link ">
                  Already have an account?Plese,Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;