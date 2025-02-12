import { useState } from "react";

const Register = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const addUser = (event) => {
    event.preventDefault();

    console.log("submitted")
  }

  return (
    <form onSubmit={ addUser }>
      <input placeholder="first name" onChange={(event) => {setFirstName(event.target.value)}} />
      <input placeholder="last name" onChange={(event) => {setLastName(event.target.value)}} />
      <input placeholder="email" type="email" onChange={(event) => {setEmail(event.target.value)}}/>
      <input placeholder="password" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
      <button>Register</button>
    </form>
  )
}

export default Register;