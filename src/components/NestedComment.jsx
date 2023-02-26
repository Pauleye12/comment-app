import React, { useState } from "react";
import CommentVote from "./CommentVote";
import Form from "./Form";
import data from "../../public/data.json";
import Delete from "./delete";
import { motion } from "framer-motion";

const buttonVariant = {
  visible: {},
  hover: {
    scale: 1.4,
    opacity: 0.7,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const replyBoxVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const formVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function NestedComment({ e, parentId, voteComment, update, deleteComment }) {
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
      <motion.div
        className="flex flex-col md:flex-row md:gap-[30px] gap-[4px] justify-start items-start px-[14px] py-[15px] max-w-[800px] w-full bg-white rounded-[8px] "
        variants={replyBoxVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="order-last md:order-first flex justify-between items-center max-md:w-full ">
          <CommentVote
            id={parentId}
            score={e.score}
            nestedCommentId={e.id}
            voteComment={voteComment}
          />
          <div className="flex gap-[20px] md:hidden">
            {e.user.username === "juliusomo" && (
              <Delete
                deleteComment={deleteComment}
                id={parentId}
                nestedCommentId={e.id}
              />
            )}
            <motion.button
              className="flex justify-center items-center gap-[7px] text-[#5357b8] font-bold "
              onClick={() => setIsCommenting((prev) => !prev)}
              variants={buttonVariant}
              animate="visible"
              whileHover="hover"
            >
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  fill="#5357B6"
                />
              </svg>
              Reply
            </motion.button>
          </div>
        </div>
        <div className=" order-first md:order-last  max-w-[500px] p-[10px] flex-grow">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-[10px]">
              <div className="w-[50px]">
                <img src={e.user.image.png} alt="" />
              </div>
              <h1 className="font-[700] text-[black] ">{e.user.username}</h1>
              <p className="">{e.createdAt}</p>
            </div>
            <div className="md:flex gap-[20px] hidden">
              {e.user.username === "juliusomo" && (
                <Delete
                  deleteComment={deleteComment}
                  id={parentId}
                  nestedCommentId={e.id}
                />
              )}
              <motion.button
                className="flex justify-center items-center gap-[7px] text-[#5357b8] font-bold "
                onClick={() => setIsCommenting((prev) => !prev)}
                variants={buttonVariant}
                animate="visible"
                whileHover="hover"
              >
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                    fill="#5357B6"
                  />
                </svg>
                Reply
              </motion.button>
            </div>
          </div>
          <p className=" mt-[10px]">{e.content}</p>
        </div>
      </motion.div>

      {isCommenting && (
        <motion.div
          className="mt-1.5"
          variants={formVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Form onSubmit={onSubmit} />
        </motion.div>
      )}
    </div>
  );
}

export default NestedComment;
