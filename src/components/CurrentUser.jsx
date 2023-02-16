import React, { useState } from "react";
import data from "../../public/data.json";
import Form from "./Form";

function CurrentUser(props) {
  const [text, setText] = useState("");
  const [user, setUser] = useState(data.currentUser);
  const textEdit = (e) => setText(e.target.value);

  const save = (comment) => {
    const newobj = {
      id: Date.now(),
      content: comment,
      createdAt: "2 days ago",
      score: 0,
      user: user,
      replies: [],
    };
    props.update((prev) => [...prev, newobj]);
    setText("");
  };

  return (
    <div className=" fixed bottom-0 left-0 w-screen  ">
      <Form onSubmit={save} buttonText="SEND" />
    </div>
  );
}

export default CurrentUser;
