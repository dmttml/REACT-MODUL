
import data from "./data/Jdata.json"
import PersonList from "./componenets/personList";


const App = () =>{
  
  return (
    <div className="App">
      {data.map((personInfo,index) => <PersonList key={index} data={personInfo} />)}
    </div>
  );
};

export default App;
