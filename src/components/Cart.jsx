import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const deletes = <FontAwesomeIcon icon={faTrash} />;

const Cart = () => {
  return (
    <div className="flex justify-around items-center mx-auto bg-white">
      <div>
        <h1 className="text-xl ">Continue for shopping </h1>
        <div className="p-[.1px] bg-gray-800 mb-7"></div>
        <div className="p-[24px] rounded shadow">
          <div className="flex w-[500px] justify-between items-center text-lg ">
            <img src="" alt="" className="w-[50px]" />
            <span>2</span>
            <span>$900</span>
            <a className="cursor-pointer" href="/">{deletes}</a>
          </div>
        </div>
      </div>
      <div className="w-[354px] bg-[#1266f1] justify-between flex-col space-x-2 py-6 text-lg text-white">
        <div className="flex-col space-x-2 ">
          <span></span>
          <h1>Card details</h1>
          <h2>card Type</h2>
          <span>logo</span>
        </div>
        <div className="flex-col justify-between items-center py-3 space-y-4">
          <input
            type="text"
            className="p-1 rounded border-2 border-white bg-inherit"
            placeholder="card holder name "
          />
          <input
            type="text"
            className="p-1 rounded border-2 border-white bg-inherit"
            placeholder="1234 5678 9012 3457"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="MM/YY"
              size="7"
              id="exp"
              minlength="7"
              maxlength="7"
              className="p-1 rounded border-2 border-white bg-inherit"
            />
            <input
              type="pass"
              placeholder="Cvv"
              maxLength="3"
              className="p-1 rounded border-2 border-white bg-inherit"
            />
          </div>
        </div>
        <div className="p-[.1px] bg-gray-800 mb-7"></div>

        <div className="flex-col ">
          <div className="flex justify-between items-center p-1">
            <span>Subtotal</span> <span>$2343545</span>
          </div>
          <div className="flex justify-between items-center p-1">
            <span>shipping</span> <span>$2343545</span>
          </div>
          <div className="flex justify-between items-center p-1">
            <span>Total(incl.taxes)</span> <span>$2343545</span>
          </div>
          <a
            href=""
            className="flex justify-between items-center bg-[#39c0ed] mx-3 my-2 rounded p-2 hover:bg-[#05b5f0] shadow"
          >
            <span>$2343545</span> <span>Checkout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
