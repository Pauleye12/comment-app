import { useState } from "react";
import data from "../../public/data.json";
import { motion } from "framer-motion";

export default function Form({ onSubmit, buttonText = "Reply" }) {
  const [inputText, setInputText] = useState("");


  //Destructured e.target.value
  const onChange = ({ target: { value } }) => setInputText(value);

  const onFormSubmmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
    setInputText('')
  };

  const {
    currentUser: { image },
  } = data;

  // const formVariant = {
  //   hidden: {
  //     opacity: 0,
  //     y: -50,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: .5,
  //       ease: "easeInOut",
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: "-100vh",
  //     transition: {
  //       duration: 1,
  //       ease: "easeInOut",
  //     },
  //   },
  // };
  
  const btnVariant = {
    hidden: {
      background: "#5357b8",
      scale: 1
    },
    hover: {
      scale: 1.2,
      background: "#3a3d87",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        yoyo: Infinity,
      },
    },
  };
  return (
    <motion.form
      onSubmit={onFormSubmmit}
      className="flex flex-col md:flex-row md:gap-[50px] gap-[30px] justify-between items-start px-[14px] py-[15px]  w-full bg-white rounded-[12px] mt-1.5" 
    >
      <div className=" order-last md:order-first flex justify-between items-center max-md:w-full">
        <img src={image.png} alt="" className="max-md:w-[50px] md:w-[64px] " />
        <button
          className="bg-[#5357b8] text-white py-[12px] px-[25px] rounded-lg hover:opacity-[0.5] transition-all ease-in-out duration-[.45s] md:hidden "
          type="submit"
        >
          {buttonText}
        </button>
      </div>
      <textarea
        className="border-[2px] border-Light-gray flex-grow w-full"
        onChange={onChange}
        value={inputText}
        name=""
        id=""
        rows="3"
      ></textarea>
      <motion.button
        className="bg-[#5357b8] text-white p-[10px] px-[16px] rounded-lg hidden md:block "
        type="submit" variants={btnVariant} initial='hidden' whileHover='hover'
      >
        {buttonText}
      </motion.button>
    </motion.form>
  );
}
