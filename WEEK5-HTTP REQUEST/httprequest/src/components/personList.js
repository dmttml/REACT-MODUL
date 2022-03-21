import React from 'react'
function PersonList({ list }) {
    return (
        <div>
            <h3 className="baslik">PERSON LIST</h3>
            <table>
            
                <thead>
                    <tr>
                        <th className='alt-baslik'>First Name</th>
                        <th className='alt-baslik'>Last Name</th>
                        <th className='alt-baslik'>Email</th>
                        <th className='alt-baslik'>Password</th>
                        <th className='alt-baslik'>About</th>
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