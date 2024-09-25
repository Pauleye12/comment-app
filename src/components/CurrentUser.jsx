import React, { useState } from "react";
import data from "../../public/data.json";
import Form from "./Form";

function CurrentUser(props) {
  const [text, setText] = useState("");
  const [user, setUser] = useState(data.currentUser);
  const textEdit = (e) => setText(e.target.value);

  const CreatedAtDate = () => {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return dateFormatter.format(new Date());
  };

  const save = (comment) => {
    const newobj = {
      id: Date.now(),
      content: comment,
      createdAt: CreatedAtDate(),
      score: 0,
      user: user,
      replies: [],
    };
    props.update((prev) => [...prev, newobj]);
    setText("");
  };

  return (
    <div className=" fixed bottom-0 left-0 w-screen  flex justify-center items-center ">
      <div className="max-w-[900px] w-full">
        <Form onSubmit={save} buttonText="SEND" />
      </div>
    </div>
  );
}

export default CurrentUser;
