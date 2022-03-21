
import './App.css';
import PersonList from './components/personList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, } from 'react';
import { useEffect } from 'react';


const App = () => {

  const [person, setPerson] = useState({})
    const [personList, setPersonList] = useState([])

    useEffect(() => {
      getListofPerson();
    }, [])

    const savePerson = async (pPerson) => {
    await fetch('http://localhost:3000/person', {
        method:'POST',
        body: JSON.stringify({person}),
        headers:{'Content-Type': 'application/json'}
    });
    }

    const getListofPerson = async () => {
        const response = await fetch('http://localhost:3000/person');
        const list = await response.json();
        setPersonList(list)
        }

    const submit = (e) => {
        e.preventDefault();
        savePerson(person);
        getListofPerson()
 
    }
  return (
    <div className="App container">
      <div className='row'>
         <div className='col-md-3'>
         <h3 className="baslik">ADD PERSON</h3>
         <form onSubmit={submit}>
                <label>
                    <input className="input" name="person[firstname]" placeholder="First Name"
                    value={person.firstName} onChange={e => setPerson({...person,firstName:e.target.value})}/>
                    <br />
                    <input className="input" name="person[lastname]" placeholder="Last Name" 
                    value={person.lastName} onChange={e => setPerson({...person,lastName:e.target.value})} />
                    <br />
                    <input className="input" name="person[email]" placeholder="Email"
                     value={person.email} onChange={e => setPerson({...person,email:e.target.value})}/>
                    <br />
                    <input className="input" name="person[password]" placeholder="Password" 
                    value={person.password} onChange={e => setPerson({ ...person, password: e.target.value })} />
                    <br />
                    <textarea className="about" name="message" placeholder="About" rows="10" cols="20"
                     value={person.about} onChange={e => setPerson({...person, about:e.target.value})} > </textarea>
                    <br />
                    <button type="submit" placeholder="About" className="submit">Sign Up</button>
                    <br></br>
                </label>

            </form>
         </div>
         <div className='col-md-9'>
           <PersonList list={personList}/>
         </div>
      </div>

    </div>
  );
}

export default App;
