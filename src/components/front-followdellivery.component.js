
import React, { Component } from 'react'
import "../css/FollowDelivery.css"
import axios from 'axios'
import $ from 'jquery'




export  default class FollowDelivery extends Component {
    constructor(props) {
        super(props);
    
     
    this.state={
        reference_commande:'',
        etat:''
    }

}

    componentDidMount(){
        axios.get('http://localhost:5000/deliveries/'+this.props.match.params.id)
        .then(res=>{  this.setState({ 
            reference_commande:res.data.reference_commande,
            etat:res.data.etat
        })
    

        if(res.data.etat=="en cours de préparation"){
        
            $("#step0").addClass("active")
            $("#step1").addClass("active")
            
    
            }  if(res.data.etat=="en route"){
            
                $("#step0").addClass("active")
                $("#step1").addClass("active")
                $("#step2").addClass("active")
                
        
                } if(res.data.etat=="livré"){
            
                    $("#step0").addClass("active")
                    $("#step1").addClass("active")
                    $("#step2").addClass("active")
                    $("#step3").addClass("active")
                    
            
                    }
    
    }
        
        );
        
       
    }

render() {
    return(
        
<div className="container px-1 px-md-4 py-5 mx-auto divfollow">
    <div className="card followcard">
        <div className="row d-flex justify-content-between px-3 top">
            <div className="d-flex">
                <h5>Réference Commande <span className="text-primary font-weight-bold">{this.state.reference_commande}</span></h5>
            </div>
            <div className="d-flex flex-column text-sm-right">
                <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                <p>USPS <span className="font-weight-bold">234094567242423422898</span></p>
            </div>
        </div> 
        <div className="row d-flex justify-content-center">
            <div className="col-12">
                <ul id="progressbar" className="text-center">
                    <li className="active step0" id="step0"></li>
                    <li className=" step0" id="step1"></li>
                    <li className=" step0" id="step2"></li>
                    <li className=" step0" id="step3"></li>
                </ul>
            </div>
        </div>
        <div className="row justify-content-between top">
            <div className="row d-flex icon-content"> <img className="icon" src="https://i.imgur.com/9nnc9Et.png"/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Commande<br/>Enregistrement</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img className="icon" src="https://i.imgur.com/u1AzR7w.png"/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Commande<br/>En cours de préparation</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img className="icon" src="https://i.imgur.com/TkPm63y.png"/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Commande<br/>En Route</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img className="icon" src="https://i.imgur.com/HdsziHP.png"/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Commande<br/>Livrée</p>
                </div>
            </div>
        </div>
    </div>
</div>

)
}

}