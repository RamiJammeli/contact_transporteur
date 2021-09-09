import React, { Component } from 'react'
import img4 from '../../src/img/img4.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom';

function fRemove(id){

axios.delete('http://localhost:5000/deliveries/'+id)
.then (rd =>{alert(rd.data)});

window.location.reload();

return 0;

}
const card = (props)=>{
    console.log(props);
    return(
        <div  className="col-lg-3">
        <div className="card card-elee" >
          <img className="card-img-top cardimg" src={img4} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title"><b>Réf:</b>{props.reff}</h5>
            <p className="card-text"><b>Adresse:</b>{props.adresse}</p>
          </div>
          <ul className="list-group list-group-flush">
              
            <li className="list-group-item"><b>Prix Initial:</b>{props.p1}  </li>
            <li className="list-group-item"><b>Prix Total:</b>{props.p2} </li>
            <li className="list-group-item"><b>Date Livraison:</b>{props.date}</li>
            <li className="list-group-item"><b>Type Livraison:</b>{props.type}</li>
            <li className="list-group-item">
            <button onClick={()=> fRemove(props.idd)} className="myListButton btn btn-info">remove </button>
            <Link to={"/EditMyDelivery/"+props.idd} className="btn btn-info" style={{marginLeft: "10px"}} >Edit</Link>
            </li>

            <li className="list-group-item">
            <Link to={"/MyOrderStatus/"+props.idd} className="btn btn-primary" style={{width: "203px"}} >Order status</Link>
            </li>
            
           
          </ul>
          
        </div>
        </div>
        

    )
}

export default card;