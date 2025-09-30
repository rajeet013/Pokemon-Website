import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Images/logo.png';

const Navbar = () => {
  const LinkclassName  = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  return (
        <nav className="bg-[#92c64d] border-b border-[#92c64d]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/*<!-- Logo -->*/}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src= { logo }
                alt="Bulbasaur"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Bulbasite</span
              >
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={ LinkclassName  }
                  >Home</NavLink
                >
                <NavLink
                  to="/jobs"
                  className={ LinkclassName  }
                  >Jobs</NavLink
                >
                <NavLink
                  to="/add-job"
                  className={ LinkclassName  }
                  >Add Job</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar