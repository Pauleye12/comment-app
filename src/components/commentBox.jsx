import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import data from "../../public/data.json";
import Form from "../components/Form";
import CommentVote from "./CommentVote";
import NestedComment from "./NestedComment";

function CommentBox({ values, update, voteComment }) {
  const [isCommenting, setIsCommenting] = useState(false);

  // const increament = (e) => {
  //   const newScore = ++values.score;

  //   update((prev) =>
  //     prev.map((indComment, index) =>
  //       indComment.id === values.id
  //         ? { ...indComment, score: newScore }
  //         : indComment
  //     )
  //   );
  // };

  const onReply = useCallback((reply) => {
    const replyPayload = {
      id: Date.now(),
      score: 0,
      content: reply,
      user: data.currentUser,
      createdAt: "2 weeks",
    };

    update((prev) => {
      const updatedComments = prev.map((comment) => {
        if (comment.id === values.id) {
          comment.replies = [...comment.replies, replyPayload];
          return comment;
        } else return comment;
      });
      return updatedComments;
    });

    setIsCommenting(false);
  }, []);

  // const repincreament = (e) => {
  //   const newScore = ++values.replies.score;

  //   // update((prev) =>
  //   //   prev.map((indComment, index) =>
  //   //     indComment.replies.id === values.replies.id
  //   //       ? { ...indComment, replies: [...replies, score: newScore] }
  //   //       : indComment
  //   //   )
  //   // );
  // };

  // const decreament = (e) => {
  //   const newScore = --values.score;
  //   update((prev) =>
  //     prev.map((indComment, index) =>
  //       indComment.id === values.id
  //         ? { ...indComment, score: newScore }
  //         : indComment
  //     )
  //   );
  // };

  return (
    <div className="w-full">
      <div className="flex gap-[30px] justify-start items-start px-[14px] py-[15px]  w-full bg-white rounded-[12px] ">
        {/* voting component for first level comment */}
        <CommentVote
          id={values.id}
          score={values.score}
          voteComment={voteComment}
        />
        <div className=" max-w-[670px] w-full  p-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-[10px] ">
              <div className="w-[50px]">
                <img src={values.user.image.png} alt="" />
              </div>
              <h1 className="font-[700] text-[black] ">
                {values.user.username}
              </h1>
              <p className="">{values.createdAt}</p>
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
          <p className=" mt-[10px]">{values.content}</p>
        </div>
      </div>
      {isCommenting && <Form onSubmit={onReply} />}
      {values.replies.length !== 0 && (
        <div className="border-l-[3px] border-Light-gray ml-[100px] pl-[50px] my-[20px] flex flex-col justify-center items-center gap-[20px] ">
          {values.replies.map((e, index) => {
            return (
              <NestedComment
                key={e.id}
                e={e}
                parentId={values.id}
                update={update}
                voteComment={voteComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CommentBox;
