import React from "react";
import { useGlobalCustomHook } from "../context";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Items = () => {
  const { cartData, total, clearCart, deleteItem, increaseItem, decreaseItem } = useGlobalCustomHook();
  return (
    <main className="text-white w-[80%] mx-auto md:w-[60%] mb-12">
      <h1 className="capitalize font-bold text-2xl text-center md:text-left md:text-3xl mt-12 font-slant mb-12">
        your bag -{" "}
        <span className="font-family text-xs md:text-sm tracking-wide lowercase">
          these are the items you saved in your cart.
        </span>
      </h1>
      <div className="w-[100%]">
        {cartData.map((item) => {
          const { id, title, image, price, amount } = item;
          return (
            <div
              key={id}
              className="grid grid-cols-11 font-family font-bold gap-3 mb-8"
            >
              {/* image container */}
              <div className="grid col-span-3 ">
                <img
                  src={image}
                  alt="title"
                  className="w-[200%] h-20 md:h-24 cursor-pointer rounded-md object-cover"
                />
              </div>
              {/* details */}
              <div className="grid col-span-7 ml-16">
                <p className="text-xs md:text-sm">Your favorite - {title}</p>
                <p className="text-sm mb-4 tracking-wider md:text-sm">
                  $ {price}
                </p>
                <p
                  className="text-xs  md:text-sm hover:text-gray-300 cursor-pointer"
                  onClick={() => deleteItem(id)}
                >
                  remove
                </p>
              </div>
              {/* increase and decrease container */}
              <section className="grid col-span-1">
                <div className="flex flex-col justify-between items-center">
                  <button onClick={() => increaseItem(id)}>
                    <IoIosArrowUp className="cursor-pointer" />
                  </button>
                  <p>{amount}</p>
                  <button>
                    <IoIosArrowDown
                      className="cursor-pointer"
                      onClick={() => decreaseItem(id)}
                    />
                  </button>
                </div>
              </section>
            </div>
          );
        })}
      </div>
      <footer className=" flex justify-between items-center border-top font-slant font-black my-16 border-t pt-4 w-[105%] md:w-[100%]">
        <h1 className="text-3xl md:text-4xl capitalize tracking-wide">total</h1>
        <p className="text-lg capitalize tracking-wider">$ {total}</p>
      </footer>
      {/* clear container */}
      <div className="text-center">
        <button className="font-family font-black text-sm uppercase px-5 py-2 tracking-wider bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md cursor-pointer animate-pulse transition-all duration-100 ease-in hover:scale-110" onClick={clearCart}>
          clear cart
        </button>
      </div>
    </main>
  );
};

export default Items;
