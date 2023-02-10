import React, { useState } from 'react'
import data from "../../public/data.json";

function CurrentUser(props) {

  const [text, setText] = useState('');
  const [user, setUser] = useState(data.currentUser)
  const textEdit = (e) => (
    setText(e.target.value)
  )

  const save = (e) => {
    e.preventDefault()
    const newobj = {"id": 4,"content": text, "createdAt": "2 days ago", "score":0, "user": user, "replies":[]}
    props.update((prev) => ([...prev, newobj ]))
    setText('')
  }
    

  return (
    <form className="flex gap-[70px] justify-between items-start px-[14px] py-[15px] max-w-[800px] w-full bg-white rounded-[12px] ">
      <div>
        <img src={user.image.png} alt="" />
      </div>
      <textarea
        className="border-[2px] border-Light-gray"
        onChange={textEdit}
        value={text}
        name=""
        id=""
        cols="50"
        rows="3"
      ></textarea>
      <button
        className="bg-[#5357b8] text-white p-[10px] px-[16px] rounded-lg hover:opacity-[0.5] transition-all ease-in-out duration-[.45s] "
        onClick={save}
      >
        SEND
      </button>
    </form>
  );
}

export default CurrentUser