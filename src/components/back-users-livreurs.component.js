
import React from 'react';
import img4 from '../../src/img/avatar1.png'
import { Link } from 'react-router-dom';



const Livreurs =(props)=>{
    const adresse=props.user.adresse?props.user.adresse: "--non communiquée--";
    const Desactive=()=>{
      if(props.user!=undefined){
        if(props.user.date_suppression!=null){
          return <li className="list-group-item"><b> Désactiver </b></li>
        }else
        return null;
      }else
      return null;
    }

    var datenaiss=""; 
        if(props.user){
        var dt= props.user.dateNaissance.split('T');
        datenaiss= dt[0];
        }

      
    
    return(
        <div className="col-xl-3 col-lg-3 col-md-4 px-3" style={{ textAlign: 'center'}}>
        <div className="card card-elee" >
          <img className="card-img-top cardimg" src={img4} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{ props.user.username}</h5>
            <p className="card-text">Nom : {props.user.nom}</p>
            <p className="card-text">Prenom : {props.user.prenom}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Mail: {props.user.mail}</li>
            <li className="list-group-item"> Adresse: {adresse}  </li>
            <li className="list-group-item">Date Naissance : {datenaiss}</li>
            <Desactive/>
            <li className="list-group-item">
            <Link style={{color:"#CA300A",fontWeight:"bold"}} to={'/backlivreurdetail/'+props.user.username}> Details </Link>
              </li>
           
          </ul>
          
        </div>
        </div>
              
    )
}
export default Livreurs;