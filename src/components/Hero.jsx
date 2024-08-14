import React from "react";
import img from "../assets/img/heroNew.png";
import Button from "../layouts/Button";
import MenuCard from "../layouts/MenuCard";
import OtherMenu from "./OtherMenu";
import Review from "./Review";
const Hero = () => {
  const menuData = [
    {
      id: 1,
      img: "src/assets/img/menu1.jpg",
      title: "Margarita Marvel",
      price: "16.99",
    },
    {
      id: 2,
      img: "src/assets/img/menu2.jpg",
      title: "Pesto Paradise",
      price: "18.99",
    },
    {
      id: 3,
      img: "src/assets/img/menu3.jpg",
      title: "Hawaiian Bliss",
      price: "14.99",
    },
    {
      id: 4,
      img: "src/assets/img/menu4.jpg",
      title: "Truffle Treasures",
      price: "15.99",
    },
    {
      id: 5,
      img: "src/assets/img/menu5.jpg",
      title: "Farmhouse Harvest",
      price: "18.99",
    },
    {
      id: 6,
      img: "src/assets/img/menu6.jpg",
      title: "Cheese Frenzy",
      price: "13.99",
    },
  ];
  return (
<>
<div className=" h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      <div className=" w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
        <h1 className=" text-4xl lg:text-7xl font-bold leading-tight">
          Authentic <span className="text-yellow-500">Pizzas</span> Timeless
          Flavors
        </h1>
        <p className=" text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          aspernatur similique dignissimos deleniti cum natus voluptatibus vitae
          at nemo possimus.
        </p>
        <Button title="Read More" />
      </div>

      {/* img section  */}
      <div className=" mt-14">
        <img className="animate-spin-slow w-56 lg:w-96" src={img} alt="img" />
      </div> 
    </div>
    <div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center pt-24">
        Our Speciality
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
    <div className="min-h-screen text-white flex flex-col items-end justify-center mt-14 bg-[url('./assets/img/aboutUs.jpg')] bg-cover bg-no-repeat">
      <div className=" mx-auto mr-44">
        <h3 className=" text-white text-5xl pr-16 font-semibold">The Best</h3>
        <h1 className=" text-yellow-400 text-7xl md:text-9xl font-bold">PIZZA</h1>
        <h3 className=" text-white text-6xl pl-32">Around</h3>
      </div>
    </div>
    <OtherMenu/>
    <Review/>
</>
  );
};

export default Hero;