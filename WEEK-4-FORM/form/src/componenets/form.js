import React, { useState } from "react"

const Form = (props) => {
   const[username,setUsername] = useState("")
   const[email,setEmail] = useState("")
   const [password,setPassword] = useState("")

   const handleSubmit = (e) =>{
       e.preventDefault()
       console.log(username)
   }
    return (
        <div>
            <h1 className="baslik">SIGN APP</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="username" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br></br>
                    <input type="email" name="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br></br>
                    <input type="password" name="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <input type="password" name="password" className="input" placeholder="Password repeat"/>
                    <br></br>
                    <button type="submit" value="Submit"  className="submit">Sign Up</button>
                    <br></br>
                </label>
                
            </form>
        </div>
    )
}
export default Form