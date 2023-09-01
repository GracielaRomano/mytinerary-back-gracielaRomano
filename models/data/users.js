import 'dotenv/config.js'
import { connect } from 'mongoose'
import User from '../User.js'

const users = [{
    name: "Ignacio",
    lastName: "Borraz",
    mail: "igna@mh.com",
    photo: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
    password: "Hola1234",
    country: "Argentina"
},{
    name: "Cinthia",
    lastName: "Di Risio",
    mail: "cin@mh.com",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvthI4oEHnl5gt0wsoU6aa0WPLaeT9w8B5Iw&usqp=CAU",
    password: "Hola1234",
    country: "Argentina"
},{
    name: "Franco",
    lastName: "Sosa",
    mail: "fran@mh.com",
    photo: "https://i.pinimg.com/originals/42/04/77/4204771e1c54c2b9afa36f668261e7bd.gif",
    password: "Hola1234",
    country: "Argentina"
},{
    name: "Graciela",
    lastName:"Romano",
    mail: "algo@algo.com",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEd06xM3alC8hOOY391yNzVOp7BIuaHWLkQ&usqp=CAU",
    "password":"123",
    "country": "Argentina"  
}]


connect(process.env.LINK_DB)
    .then(()=>{
        User.insertMany(users)
        console.log('done!');
    })
    .catch(err=>console.log(err))