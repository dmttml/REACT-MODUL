import React, { useState } from "react"


const Form = () => {
    const [user, setUser] = useState({})
    const [submited, setsubmited] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        if (user.password !== user.passwordrepeat) {
            return;
        }
        setsubmited(!submited)
    }
    return (
        <div>
            <h1 className="baslik">SIGN APP</h1>
            <form onSubmit={submit}>
                <label>
                    <input name="user[username]" placeholder="username" className="input" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
                    <br />
                    <input className="input" name="user[email]" placeholder="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                    <br />
                    <input className="input" name="user[password]" placeholder="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                    <br />
                    <input className="input" name="user[password]" placeholder="password repeat" value={user.passwordrepeat} onChange={e => setUser({ ...user, passwordrepeat: e.target.value })} />
                    <br />
                    <button type="submit" className="submit">Sign Up</button>
                    <br></br>
                </label>

            </form>

            {
                submited &&
                <section className="container">
                    <h1>Your Information</h1>
                    <ul>
                        <li className="list">Username: {user.username}</li>
                        <li className="list">Email:{user.email}</li>
                        <li className="list">Password:{user.password}</li>
                    </ul>
                </section>
            }

        </div>
    )
}
export default Form