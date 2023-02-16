import React, { memo } from "react";
import { useState } from "react";
import CommentBox from "./commentBox";
import data from "../../public/data.json";
import CurrentUser from "./CurrentUser";
import { useCallback } from "react";
import { useEffect } from "react";
function Container() {
  //setting the state from the local storage or from the data.comment if local storage is empty.
  const [info, setInfo] = useState(() => {
    const localStorageData = localStorage.getItem("comments");
    if (localStorageData) {
      return JSON.parse(localStorageData)?.comments || [];
    } else {
      return data.comments;
    }
  });
  info.sort((a, b) => b.score - a.score);

  useEffect(() => {
    localStorage.setItem(
      "comments",
      JSON.stringify({ comments: info, currentUser: data.currentUser })
    );
  }, [info]);

  // const key = "age"

  // const person = {
  //   name: "ola",
  //   [key]:12
  // }

  // console.log(person[key])

  // const [formDate, setformDate] = useState({
  //   firtName
  // })

  // const obj = {
  //   [info]: "value",
  // };
  // const onChange = (field) => (e) => {
  // setformDate((prev)=> ({...prev, [field]:e.target.value}))
  // }

  // onChange('firstName')
  // onChange('lastName')

  // function to upvote and downvote a comment, this function is passed as props to the component that needs it and it take 3 arguements (parentsID, action and reply ID (if required)
  const voteComment = useCallback(
    (id, action, nestedCommentId) => () => {
      const updatedCommnets = info.map((comment) => {
        if (comment.id === id) {
          if (nestedCommentId) {
            const nestedComment = comment.replies.map((_comment) => {
              if (_comment.id === nestedCommentId) {
                _comment.score =
                  action === "inc" ? _comment.score + 1 : _comment.score - 1;
                return _comment;
              } else return _comment;
            });
            comment.replies = nestedComment;
          } else {
            comment.score =
              action === "inc" ? comment.score + 1 : comment.score - 1;
          }
          return comment;
        } else {
          return comment;
        }
      });

      setInfo(updatedCommnets);
    },
    [info]
  );

  // const deleteComment = useCallback((id, nestedCommentId) => () => {
  //    const updatedComments = info.map((comment) => {
  //      if (comment.id === id) {
  //        if (nestedCommentId) {
  //          const nestedComment = comment.replies.filter((_comment) => (_comment.id !== id))
  //          return nestedComment

  //        } else {
  //          const updatedComments = info.filter((comment) => comment.id !== id);
  //         }
  //       } else {
  //         return comment
  //       }
  //     })

  //     // const updatedComments = info.filter((comment) => comment.id !== id);
  //     // return updatedComments

  //   setInfo(updatedComments)
  // }, [info])

  const deleteComment =
    (id, nestedCommentId) => () => {
      if (nestedCommentId) {
        const updated_Comments = info.map((comment) => {
          
          if (comment.id == id) {
            comment.replies = comment.replies.filter(
              (_comment) => _comment.id !== nestedCommentId
            );
            return comment
          } else {
            return comment
          }
          
        });
        setInfo(updated_Comments);
      }
      
      else {
        const updated_Comments = info.filter((comment) => comment.id !== id);
        setInfo(updated_Comments);
      }

      // const updatedComments = info.filter((comment) => comment.id !== id);
      // return updatedComments
    };

  return (
    <div className="flex flex-col justify-center items-start gap-[20px] w-full max-w-[800px] mb-[190px] md:mb-[80px] ">
      {info.map((comment, index) => (
        <CommentBox
          key={index}
          values={comment}
          update={setInfo}
          voteComment={voteComment}
          deleteComment={deleteComment}
        />
      ))}
      <CurrentUser update={setInfo} />
    </div>
  );
}

export default Container;
