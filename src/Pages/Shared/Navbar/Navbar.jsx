import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UsersauthContext } from '../Userscontext/UsersContext';
const Navbar = () => {
    const { user, logOut } = useContext(UsersauthContext);
    const handleLogOut = () => {
      logOut()
        .then(() => {
          
          console.log("Logout successful");
        })
  
        .catch((error) => {
          
          console.log(error);
        });
    };
  return (
    <div>
    <div className="navbar  bg-neutral text-neutral-content">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
      <Link to='/'><li><a>Home</a></li></Link> 
      <Link to='/assigntasks'><li><a>Assign tasks</a></li></Link> 
        
      </ul>
    </div>
    <Link to='/'><a className=" normal-case text-xl">CTMA</a></Link> 
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Link to='/'><li><a>Home</a></li></Link> 
     <Link to='/assigntasks'><li><a>Assign tasks</a></li></Link> 
     <Link to='/usersprofile'><li><a>UsersProfile</a></li></Link> 
   
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
            <a onClick={handleLogOut} className="btn btn-ghost btn-circle">
              LogOut
            </a>
          ) : (
            <Link to={`/login`}>
              <a className="btn btn-ghost btn-circle">LogIn</a>
            </Link>
          )}

  </div>
</div>
    </div>
  )
}

export default Navbar