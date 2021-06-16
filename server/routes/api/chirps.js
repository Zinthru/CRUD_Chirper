const express = require('express');
const app = express();

app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM user_statuses";
    db.query(sqlSelect, (err,result)=>{
        
        res.send(result);
    })
})

app.post('/api/insert',(req,res)=> {
    const userName = req.body.userName
    const userStatus= req.body.userStatus

    const sqlInsert = "INSERT INTO user_statuses (userName, userStatus) VALUES (?,?)";
    db.query(sqlInsert,[userName, userStatus],(err,result)=> {
        console.log(result);
    })
});

app.remove('/api/remove/:userName', (req,res)=> {
    const name = req.params.userName
    const sqlRemove =
    "DELETE INTO user_statuses WHERE userName = ?";  
    
    db.query(sqlRemove, name, (err,result) => {
        if (err) console.log(err)
    })
})

app.put('/api/update/:userName', (req,res)=> {
    const name = req.body.userName
    const status = req.body.userStatus
    const sqlUpdate =
    "UPDATE user_statuses SET userStatus = ? WHERE userName = ?";  
    
    db.query(sqlUpdate, [status,name], (err,result) => {
        if (err) console.log(err)
    })
})

export default {
    app
  }