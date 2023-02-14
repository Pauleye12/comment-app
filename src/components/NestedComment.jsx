import React, { useState } from "react";
import CommentVote from "./CommentVote";
import Form from "./Form";
import data from "../../public/data.json";

function NestedComment({ e, parentId, voteComment, update }) {
  const [isCommenting, setIsCommenting] = useState(false);

  function onSubmit(reply) {
    const replyPayload = {
      id: Date.now(),
      score: 0,
      content: reply,
      user: data.currentUser,
      createdAt: "2 weeks",
    };

    update((prev) => {
      const updatedComments = prev.map((comment) => {
        if (comment.id === parentId) {
          comment.replies = [...comment.replies, replyPayload];
          return comment;
        } else return comment;
      });
      return updatedComments;
    });

    setIsCommenting(false);
  }

  return (
    <div className="w-full">
      <div className="flex gap-[30px]  items-start px-[14px] py-[15px] max-w-[800px] w-full bg-white rounded-[8px] ">
        <CommentVote
          id={parentId}
          score={e.score}
          nestedCommentId={e.id}
          voteComment={voteComment}
        />
        <div className=" max-w-[500px] p-[10px] flex-grow">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-[10px]">
              <div className="w-[50px]">
                <img src={e.user.image.png} alt="" />
              </div>
              <h1 className="font-[700] text-[black] ">{e.user.username}</h1>
              <p className="">{e.createdAt}</p>
            </div>
            <button
              className="flex justify-center items-center gap-[7px] text-[#5357b8] font-bold hover:opacity-[0.5] transition-all ease-in-out duration-[.45s] "
              onClick={() => setIsCommenting((prev) => !prev)}
            >
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
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
      <div className="mt-1.5">
        {isCommenting && <Form onSubmit={onSubmit} />}
      </div>
    </div>
  );
}

export default NestedComment;
