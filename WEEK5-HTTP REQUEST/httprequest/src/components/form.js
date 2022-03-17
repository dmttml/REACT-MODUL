import React from "react";
import { useState } from "react";


const Form = () => {
    const [user, setUser] = useState({})
    const [submited, setSubmited] = useState(false)
    const submit = (e) => {
        e.preventDefault()

        setSubmited(!submited)
    }

    
   
    return (
        <div >

            <h3 className="baslik">ADD PERSON</h3>
            <form onSubmit={submit}>
                <label>
                    <input className="input" name="person[firstname]" placeholder="First Name" value={user.firstName} onChange={e => setUser({...user,firstName:e.target.value})}/>
                    <br />
                    <input className="input" name="person[lastname]" placeholder="Last Name" value={user.lastName} onChange={e => setUser({...user,lastName:e.target.value})} />
                    <br />
                    <input className="input" name="person[email]" placeholder="Email" value={user.email} onChange={e => setUser({...user,email:e.target.value})}/>
                    <br />
                    <input className="input" name="person[password]" placeholder="Password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                    <br />
                    <textarea className="about" name="message" placeholder="About" rows="10" cols="20" value={user.about} onChange={e => setUser({...user, about:e.target.value})} > </textarea>
                    <br />
                    <button type="submit" placeholder="About" className="submit">Sign Up</button>
                    <br></br>
                </label>

            </form>




        </div>

    )
}

export default Form