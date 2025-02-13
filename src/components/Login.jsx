import { useState } from "react";

const Login = () => {
  // for account creation
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ token, setToken ] = useState("");
  // for displaying account info
  const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ dispalyEmail, setDispalyEmail ] = useState("");
  const [ checkedOutBooks, setCheckedOutBooks ] = useState([]);
  console.log(token);
  console.log(firstName);
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
      alert(error);
    }
  }

  const getUserInfo = async() => {
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
        });
        const userInfo = await response.json();
        setFirstName(userInfo.firstname);
        setLastName(userInfo.lastname);
        setDispalyEmail(userInfo.email);
        setCheckedOutBooks(userInfo.books);
      } catch(error) {
        alert(error);
      }
  }
  
  return (
    <>
      <h2>Let's Login!</h2>
      <form onSubmit={ loggingIn }>
        <input placeholder="email" type="email" onChange={(event) => setEmail(event.target.value)} value={ email } />
        <input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} value={ password } />
        <button>Login</button>
      </form>
      
      {
        token ? 
        <>
          <section className="details-button">
            <button onClick={ getUserInfo }>See Profile</button>
            <h2>Name: { firstName } { lastName }</h2> 
            <h2>Email: { dispalyEmail }</h2>
            <h3>Checked out books: { checkedOutBooks }</h3>
          </section>
        </>
        :
        null
      }
    </>
  )
}

export default Login;