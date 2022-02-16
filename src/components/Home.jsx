import axios from "axios";
import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../features/cartSlicer";
const cart = <FontAwesomeIcon icon={faCartPlus} />;

const Home = () => {
  // hooks
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  // function.
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!product) return null;
  const handelCart = (product) => {
    dispatch(addToCart(product));
  };
  // return
  return (
    <>
      <Hero />

      <div className="grid grid-flow-col auto-cols-max mx-auto place-items-center	 gap-5 place-content-center	my-7 space-x-3">
        {product.map((product) => {
          return (
            <div key={product._id}>
              <img src={product.image} alt="" className="" />
              <div className="text-lg">
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <p>{product.description}</p>
                  </li>
                  <li>
                    <span>{product.price}</span>
                  </li>
                  <li className="w-24 bg-slate-800 text-white p-2 rounded hover:bg-white hover:text-black duration-75	">
                    <button onClick={() => handelCart(product)}>Add to {cart}</button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
