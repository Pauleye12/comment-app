import { useState } from "react";
import data from "../../public/data.json";

export default function Form({ onSubmit, buttonText = "Reply" }) {
  const [inputText, setInputText] = useState("");

  
  //Destructured e.target.value
  const onChange = ({ target: { value } }) => setInputText(value);

  const onFormSubmmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  const {
    currentUser: { image },
  } = data;

  return (
    <form
      onSubmit={onFormSubmmit}
      className="flex gap-[70px] justify-between items-start px-[14px] py-[15px] max-w-[800px] w-full bg-white rounded-[12px] mt-1.5"
    >
      <div>
        <img src={image.png} alt="" />
      </div>
      <textarea
        className="border-[2px] border-Light-gray flex-grow"
        onChange={onChange}
        value={inputText}
        name=""
        id=""
        rows="3"
      ></textarea>
      <button
        className="bg-[#5357b8] text-white p-[10px] px-[16px] rounded-lg hover:opacity-[0.5] transition-all ease-in-out duration-[.45s] "
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}
