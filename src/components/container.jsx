import React from "react";
import { useState } from "react";
import CommentBox from "./commentBox";
import data from "../../public/data.json";
import CurrentUser from "./CurrentUser";
function Container() {
  const [info, setInfo] = useState(data.comments);
   
    // const update = () => {
    //     setInfo((prevState) => ({

    //     }))
    // }

  return (
    <div className="flex flex-col justify-center items-start gap-[20px] max-w-[800px] ">
      {info.map((e, index) => (
        <CommentBox key={index} values={e} update={setInfo} />
      ))}
      <CurrentUser update={setInfo} />
    </div>
  );
}

export default Container;
