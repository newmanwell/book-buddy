import { useState } from "react";

const Register = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const addUser = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password
        })
      });
      const newUser = response.json();
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch(error) {
        alert(error);
      }
  }

  return (
    <>
      <h2>Create an account</h2>
      <form onSubmit={ addUser }>
        <input placeholder="first name" onChange={(event) => {setFirstName(event.target.value)}} value={ firstName } />
        <input placeholder="last name" onChange={(event) => {setLastName(event.target.value)}} value={ lastName } />
        <input placeholder="email" type="email" onChange={(event) => {setEmail(event.target.value)}} value={ email } />
        <input placeholder="password" type="password" onChange={(event) => {setPassword(event.target.value)}} value={ password } />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register;