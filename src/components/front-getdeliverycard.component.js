import React from 'react'
import img4 from '../../src/img/img4.jpg'
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
           
          </ul>
          
        </div>
        </div>
        

    )
}

export default card;