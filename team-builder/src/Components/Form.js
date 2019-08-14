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

  const submitForm = event => {
    if (
      event.target.name.length === 0 ||
      event.target.email.length === 0 ||
      event.target.role.length === 0 ||
      event.target.favColor.length === 0 ||
      event.target.quote.length === 0
    ) {
      event.preventDefault();
      console.log("no changes made");
    } else {
      event.preventDefault();
      const newMember = {
        ...member,
        id: Date.now()
      };
      props.addMember(newMember);
      setMember({
        name: "",
        email: "",
        role: "",
        favColor: "",
        quote: ""
      });
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <label htmlFor="name">Member Name</label>
        <input
          type="text"
          name="name"
          placeholder="Type Name Here"
          value={member.name}
          onChange={changeHandler}
        />

        <label htmlFor="email">Member Email</label>
        <input
          type="text"
          name="email"
          placeholder="Type Email Here"
          value={member.email}
          onChange={changeHandler}
        />

        <label htmlFor="role">Member Role</label>
        <input
          type="text"
          name="role"
          placeholder="Type Role Here"
          value={member.role}
          onChange={changeHandler}
        />

        <label htmlFor="favColor">Favorite Color</label>
        <input
          type="text"
          name="favColor"
          placeholder="Type Favourite Color Here"
          value={member.favColor}
          onChange={changeHandler}
        />

        <label htmlFor="quote">Quote</label>
        <input
          type="text"
          name="quote"
          placeholder="Type Quote Here"
          value={member.quote}
          onChange={changeHandler}
        />
        <button hidden type="submit">
          Add Member Here
        </button>
      </form>
    </div>
  );
};

export default Form;
