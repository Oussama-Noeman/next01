"use client";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
  const click = () => {};
  return (
    <nav className="bg-white p-5 mt-8 shadow md:flex md:items-center md:justify-between">
      <div>
        <span className="text-2xl cursor-pointer text-red-700 ms-20 font-semibold">
          LOGO
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto ">
        <li className="mx-7 my-6 md:my-0">
          <Link
            href="#"
            className="text-black text-lg font-semibold  hover:text-gray-200 "
          >
            MENU
          </Link>
        </li>
        <li className="mx-7 my-6 md:my-0">
          <Link
            href="#"
            className="text-black text-lg font-semibold  hover:text-gray-200 "
          >
            ABOUT US
          </Link>
        </li>
        <li className="mx-7 my-6 md:my-0">
          <Link
            href="#"
            className="text-black text-lg font-semibold  hover:text-gray-200 "
          >
            PROMOTION
          </Link>
        </li>
        <li className="ms-7 me-28 my-6 md:my-0">
          <Link
            href="#"
            className="text-black text-lg font-semibold  hover:text-gray-200 "
          >
            MY CART
          </Link>
        </li>
        <CustomButton
          title="SIGN IN"
          containerStyles="bg-red-700 hover:bg-white hover:text-red-700 text-white mx-4 me-28 py-2 px-6 rounded-full duration-500 "
          handleClick={click}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
