import React from 'react'

import { Link } from 'react-router-dom';
var datenaiss="";
const Clients= (props)=>{
  var datenaiss=""; 
  if(props.user){
  var dt= props.user.dateNaissance.split('T');
  datenaiss= dt[0];
  }


  
    return(
    <tr>
      <td>{props.user.username}</td>
      <td>{props.user.nom}</td>
      <td>{props.user.prenom}</td>
      <td>{props.user.adresse}</td>
      <td>{props.user.mail}</td>
      <td>{datenaiss}</td>
      <td><Link to={'/backudetail/'+props.user.username}> Details </Link> </td>
    </tr>
    )
}

export default Clients