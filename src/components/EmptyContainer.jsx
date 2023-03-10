import React from 'react'
import { useGlobalCustomHook } from '../context';

const EmptyContainer = () => {
    const { cartData } = useGlobalCustomHook();
  return (
    <main className="text-white w-[80%] mx-auto md:w-[60%] mt-32">
      <h1 className="capitalize font-bold text-2xl text-center md:text-left md:text-3xl mt-12 font-slant my-12">
        your bag -{" "}
        <span className="font-family text-xs md:text-sm tracking-wide lowercase">
          your bag is empty. try adding items to your bag in the products page .
        </span>
      </h1>
    </main>
  );
}

export default EmptyContainer