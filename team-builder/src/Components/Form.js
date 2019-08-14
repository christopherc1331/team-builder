import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
    favColor: "",
    quote: ""
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  return (
    <div className="formContainer">
      <form>
        <label htmlFor="name">Member Name</label>
        <input
          type="text"
          name="name"
          placeHolder="Type Name Here"
          value={member.name}
          onChange={changeHandler}
        />

        <label htmlFor="email">Member Email</label>
        <input
          type="text"
          name="email"
          placeHolder="Type Email Here"
          value={member.email}
          onChange={changeHandler}
        />

        <label htmlFor="role">Member Role</label>
        <input
          type="text"
          name="role"
          placeHolder="Type Role Here"
          value={member.role}
          onChange={changeHandler}
        />

        <label htmlFor="favColor">Favorite Color</label>
        <input
          type="text"
          name="favColor"
          placeHolder="Type Favourite Color Here"
          value={member.favColor}
          onChange={changeHandler}
        />

        <label htmlFor="quote">Quote</label>
        <input
          type="text"
          name="quote"
          placeHolder="Type Quote Here"
          value={member.quote}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default Form;
