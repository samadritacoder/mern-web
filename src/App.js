import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {

const [email,setemail] = useState('')
const [password,setpassword] = useState('')

  const handelSubmit = ()=>{
    axios.post("http://localhost:5000/login",{email,password}).then((res)=>{
      console.log(res)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
       
        <label type = "email">Email:</label>
        <input onChange={(a)=>setemail(a.target.value)} value={email} type="email" ></input>

        <label type = "password">Password:</label>
        <input onChange={(a)=>setpassword(a.target.value)} value={password} type="password" ></input>

        <button onClick={handelSubmit}>submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
