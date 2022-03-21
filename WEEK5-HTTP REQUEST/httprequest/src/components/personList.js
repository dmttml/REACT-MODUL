import React from 'react'
function PersonList({ list }) {
    return (
        <div>
            <h3 className="baslik">PERSON LIST</h3>
            <table>
            
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>About</th>
                    </tr>
                </thead>

                {

                    list.map((person, index) => {
                        <tr key={index}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.email}</td>
                        <td>{person.password}</td>
                        <td>{person.about}</td>
                    </tr>
                    })
                }
            </table>
        </div>
    )
}

export default PersonList