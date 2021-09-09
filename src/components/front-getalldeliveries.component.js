import React, {Component} from 'react'
import Header from "./header.component";
import Footer from "./footer.component";
import Card from "./front-getdeliverycard.component";
import axios from 'axios'
export  default class Getdeliveries extends Component {

  constructor(props) {
    super(props);


    
    this.state = {deliveries : []
        
      }
    }


    componentDidMount(){
      axios.get('http://localhost:5000/deliveries')
      .then(res=>{console.log(res.data);  this.setState({ deliveries:res.data})});
      
    
    }



render() {
    return (
<div>
    <Header/>
    <br/>
    <div className="rows">
   {this.state.deliveries.map((item,index)=>{
    return ( <Card key={index} idd={item._id} reff= {item.reference_commande} adresse={item.adresse} p1={item.prix_initial} p2={item.prix_total} date={(item.datelivraison).split('T')[0] }type={item.type_livraison}></Card> )
   } )
  
   }
   </div>
   <Footer/>
</div>
)
}
}