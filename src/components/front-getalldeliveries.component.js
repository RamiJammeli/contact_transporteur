import React, {Component} from 'react'
import Header from "./header.component";
import Footer from "./footer.component";
import img4 from '../../src/img/img4.jpg'
export  default class Getdeliveries extends Component {

render() {
    return (
<div>
    <Header/>
    <br/>
    <div style={{marginLeft:7}}>
<div className="card card-elee" >
  <img className="card-img-top cardimg" src={img4} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  
</div>
</div>
<Footer/>
</div>
)
}
}