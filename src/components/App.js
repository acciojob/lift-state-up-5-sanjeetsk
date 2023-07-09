
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="main">
      <div className="parent">
        <h1>Parent Component</h1>
        {isLoggedIn ? (<p>You are logged in!</p>) : <Child setIsLoggedIn={setIsLoggedIn}/>}
      </div>        
    </div>
  )
}

const Child = ({setIsLoggedIn}) =>{

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <div className="child">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username: </label>
        <input type="text" id="name" required />
        <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
