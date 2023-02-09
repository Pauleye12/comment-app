import React from "react";
import { useState } from "react";

function CommentBox(props) {
  const [score, setScore] = useState(props.values.score);

  // if (props.values.replies.length > 0) {

  // }
  // else {
  //   console.log('lenght is 0')
  // }
  

    
    

  const increament = (e) => {
    const newVal = ++props.values.score;
    setScore(() => newVal);
  };

  
  const decreament = (e) => {
    const newVal = --props.values.score;
    setScore(() => newVal);
  };

  return (
    <div className="w-full">
      <div className="flex gap-[30px] justify-start items-start px-[14px] py-[15px]  w-full bg-white rounded-[12px] ">
        <div className="flex flex-col justify-center items-center gap-[15px] p-[10px] bg-Very-light-gray rounded-[10px] translate-y-[17px] ">
          <button onClick={increament}>
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
          <p>{score}</p>
          <button onClick={decreament}>
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
        </div>
        <div className=" max-w-[670px] w-full  p-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-[10px] ">
              <div className="w-[50px]">
                <img src={props.values.user.image.png} alt="" />
              </div>
              <h1 className="font-[700] text-[black] ">
                {props.values.user.username}
              </h1>
              <p className="">{props.values.createdAt}</p>
            </div>
            <button className="flex justify-center items-center gap-[7px] text-[#5357b8] font-bold ">
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  fill="#5357B6"
                />
              </svg>
              Reply
            </button>
          </div>
          <p className=" mt-[10px]">{props.values.content}</p>
        </div>
      </div>

      <div
        className={
          props.values.replies.length
            ? "border-l-[3px] border-Light-gray ml-[100px] pl-[50px] my-[20px] flex flex-col justify-center items-center gap-[20px] "
            : "hidden"
        }
      >
        {props.values.replies.map((e, index) => {
          const [repScore, setRepScore] = useState(e.score);
          const repincreament = (f) => {
            const newScore = ++e.score
            setRepScore(() => newScore);
          };

          const repdecreament = (f) => {
            const newScore = --e.score;
            setRepScore(() => newScore);
          };

          return (
            <div
              key={index}
              className="flex gap-[30px]  items-start px-[14px] py-[15px] max-w-[800px] w-full bg-white rounded-[8px] "
            >
              <div className="flex flex-col justify-center items-center gap-[15px] p-[10px] bg-Very-light-gray rounded-[10px] translate-y-[17px] ">
                <button onClick={repincreament}>
                  <svg
                    width="11"
                    height="11"
                    id={e.id}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                      fill="#C5C6EF"
                    />
                  </svg>
                </button>
                <p>{repScore}</p>
                <button onClick={repdecreament}>
                  <svg
                    width="11"
                    height="11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                      fill="#C5C6EF"
                    />
                  </svg>
                </button>
              </div>
              <div className=" max-w-[500px] p-[10px]">
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-[10px]">
                    <div className="w-[50px]">
                      <img src={e.user.image.png} alt="" />
                    </div>
                    <h1 className="font-[700] text-[black] ">
                      {e.user.username}
                    </h1>
                    <p className="">{e.createdAt}</p>
                  </div>
                  <button className="flex justify-center items-center gap-[7px] text-[#5357b8] font-bold ">
                    <svg
                      width="14"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                        fill="#5357B6"
                      />
                    </svg>
                    Reply
                  </button>
                </div>
                <p className=" mt-[10px]">{e.content}</p>
              </div>
            </div>
          );})}
      </div>
    </div>
  );
}

export default CommentBox;
