import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useGlobalCustomHook } from '../context';

const Navbar = () => {
    const {amount} = useGlobalCustomHook()
  return (
    <nav className="font-family font-bold w-[90%] md:w-[60%] mx-auto mt-12 text-white flex justify-between items-center">
      {/* header title  */}
      <div>
        <h1 className="capitalize text-3xl tracking-wide font-black md:text-4xl">
          my store
        </h1>
      </div>
      {/* cart bucket */}
      <section className="relative">
        <div>
          <HiOutlineShoppingBag size={35} />
        </div>
        <div className="w-8 h-8 absolute bg-[#0484C9] top-[-15px] right-0 left-4 rounded-full animate-bounce">
            <p className='text-center pt-1'>{amount}</p>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;