import { useState, useEffect } from 'react';
import './Styles.css';
import Axios from "axios";

e.preventDefault();

function App() {

    const [userStatusList, setuserList] = useState([])

    useEffect(()=>{
      Axios.get('http://localhost:3001/api/get').then((Response)=> {
      setuserList(Response.data);  
      
      
      console.log(Response.data);
      });
    }, []);
  
      
    setuserList([
      ...userStatusList, 
      {userName: userName, userStatus: status},
        ]);
       
    };
  
    const deletestatus = (user) => {
      Axios.delete(`http://localhost:3001/api/delete/+${user}`);
    };
  
    const updatestatus = (user) => {
      Axios.put(`http://localhost:3001/api/update`, {
        userName: user,
        userStatus: newstatus,
      });
      setNewstatus("")
    };
  
    return (
        <div className="App">
        <h1>CRUD Chirper edit page</h1>


      <div>
        {userStatusList.map(()=>{
            return <div className='card'>
            <h1>
            {val.userName}
            </h1>
            <p>{val.userStatus}</p>

            <button onClick={()=>(deletestatus(value.userName))}>Delete</button>
            <input type='text'id='updateInput' onChange={()=>{
            setNewstatus(e.target.value)
            }} />
            <button onClick={()=>{updatestatus(val.userName)}}>Update</button>

            </div>
        })}
        </div>
        </div>
    );   

export default App;