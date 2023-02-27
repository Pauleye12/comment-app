import React from 'react'
import { motion } from 'framer-motion';

function Delete({ id, deleteComment, nestedCommentId }) {

  const buttonVariant = {
    visible: {
      scale: 1,
      opacity:1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.2,
      opacity: 0.7,
      transition: {
       duration: .4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.button
      onClick={deleteComment(id, nestedCommentId)}
      className="flex justify-center items-center gap-[7px] text-[#e9646d] font-bold "
      variants={buttonVariant}
      animate="visible"
      whileTap="visible"
      whileHover="hover"
    >
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
          fill="#ED6368"
        />
      </svg>{" "}
      Delete
    </motion.button>
  );
}

export default Delete