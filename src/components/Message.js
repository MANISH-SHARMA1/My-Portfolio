import React, { useRef, useState } from "react";

function Message() {
  const fname = useRef(null);
  const lname = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const message = useRef(null);


  function handleSubmit(e) {
    e.preventDefault();

    const firstName = fname.current.value;
    const lastName = lname.current.value;
    const phn = phone.current.value;
    const mail = email.current.value;
    const msg = message.current.value;

    const curData = {
      fname: firstName,
      lname: lastName,
      phone: phn,
      email: mail,
      message: msg,
    };

    // Clearing the form fields after submission
    fname.current.value = "";
    lname.current.value = "";
    phone.current.value = "";
    email.current.value = "";
    message.current.value = "";
  }

  return (
    <div className="flex justify-center my-5">
      <div className="w-full max-w-md">
        <form className="text-center mx-5 sm:mx-0" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 sm:flex-row justify-between w-full my-5">
            <input
              className="border-2 border-cyan-400 rounded py-1 px-2 text-white"
              style={{ backgroundColor: "rgb(13, 48, 62)" }}
              type="text"
              placeholder="First Name"
              ref={fname}
              required
            />
            <input
              className="border-2 border-cyan-400 rounded py-1 px-2 text-white"
              style={{ backgroundColor: "rgb(13, 48, 62)" }}
              type="text"
              placeholder="Last Name"
              ref={lname}
              required
            />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row justify-between w-full my-5">
            <input
              className="border-2 border-cyan-400 rounded py-1 px-2 text-white"
              style={{ backgroundColor: "rgb(13, 48, 62)" }}
              type="email"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              className="border-2 border-cyan-400 rounded py-1 px-2 text-white"
              style={{ backgroundColor: "rgb(13, 48, 62)" }}
              type="tel"
              placeholder="Phone No"
              ref={phone}
              required
            />
          </div>

          <textarea
            className="border-2 border-cyan-400 rounded py-1 px-2 text-white w-full h-48"
            style={{ backgroundColor: "rgb(13, 48, 62)" }}
            placeholder="Write Message"
            ref={message}
            required
          />

          <button
            className="border-2 border-cyan-400 py-1 w-full mt-5 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
