import { useState } from "react";

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ token, setToken ] = useState("");

  const loggingIn = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const userToken = await response.json();
      setToken(userToken.token);
      setEmail("");
      setPassword("");
    } catch(error) {
      console.log(error);
    }
  }

  const getUserInfo = async() => {
    console.log('MyToken:', token);
    
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`);
    
  }
  
  return (
    <>
      <h2>Let's Login!</h2>
      <form onSubmit={ loggingIn }>
        <input placeholder="email" type="email" onChange={(event) => setEmail(event.target.value)} value={ email } />
        <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} value={ password } />
        <button>Login</button>
      </form>
      <button onClick={ getUserInfo }>See Profile</button>
    </>
  )
}

export default Login;