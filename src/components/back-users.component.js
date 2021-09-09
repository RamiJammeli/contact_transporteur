import React, {Component} from 'react'
import axios from 'axios';
import Admins from './back-users-admins.component'
import Livreur from './back-users-livreurs.component'
import Clients from './back-users-client.component'

import './../StyleCommun.css'
import $ from 'jquery'
import './../css/jquery.dataTables.min.css'

$.DataTable = require('datatables.net');

let timer = null;
let nombrelivreur=0
let nombrelignelivreur=0

export default class BackUsers extends Component{
   
    

    constructor(props) {
        super(props);
    
        this.state = {admins: [],livreurs: [], clients: []};
      }
      refreshPage(){ 
        setTimeout(()=>{
          window.location.reload(false);
      }, 200);
      console.log('page to reload')
    }

   

      

      componentDidMount() {
        
            $("#styleSign").attr("disabled", "disabled");
            $("#styleLogin").attr("disabled", "disabled");
            
           
          
        
            timer = setTimeout(() =>  {
            $('#dtClients').DataTable({"pagingType": "full_numbers"});
            $('.dataTables_length').addClass('bs-select');
              nombrelivreur= this.state.livreurs.length;
            if(nombrelivreur>0){
              if(nombrelivreur % 4==0){
                nombrelignelivreur=nombrelivreur / 4;
              }else{
                nombrelignelivreur=(nombrelivreur / 4)+1;
              }
              var indexx=0;
              console.log("nbre livreur: "+nombrelivreur);
              console.log("nbre lignes: "+nombrelignelivreur);

              for(var y=1;y<nombrelignelivreur;y++){
              var bcl=0;
              if(indexx==0){
                            $("#carouselappend").append('<div  class="item active"> <div id="divv'+y+'" class="row">') ;
                
                          }            else{
                $("#carouselappend").append('<div  class="item"> <div id="divv'+y+'" class="row">') ;
              console.log("aa");  
              }
                do{
                  bcl++;
                if(nombrelivreur>0){
                 
                  $("#"+indexx+"liv").detach().appendTo("#divv"+y);
                  
                  nombrelivreur--;
                  indexx++;
                  if(nombrelivreur<1){
                    bcl=4;
                  }
                }
              }while( bcl<4 )
             

              }
              
            }
          

          }, 4000)
       
        //admins
        axios.get('http://localhost:5000/users/getAdmins')
          .then(response => {
            this.setState({ admins: response.data })

          })
          .catch((error) => {
            console.log(error);
          })

          //livreurs
          axios.get('http://localhost:5000/users/getLivreurs')
          .then(response => {
            this.setState({ livreurs: response.data })

          })
          .catch((error) => {
            console.log(error);
          })

           //clients
           axios.get('http://localhost:5000/users/getClients')
           .then(response => {
             this.setState({ clients: response.data })
             
 
           })
           .catch((error) => {
             console.log(error);
           })

      }
      
    render(){
        return(
            <div>
                <div className="row">
                <div className="separatort">Administateurs({this.state.admins.length})</div>
                </div>
                <div className="row" style={{position: 'relative',left: '10%',marginRight:"23%", marginTop:"10px"}}>
                {
                    this.state.admins.map((item,index)=>{
                        return <Admins key={index} user={item} ></Admins>
                    })
                }
            </div>

            <div className="separatort">Livreurs({this.state.livreurs.length})</div>

            <div className="row" style={{position: 'relative',left: '10%',marginRight:"23%", marginTop:"10px"}}>
            <section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            
            
            <div className="col-6 text-right">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" id="carouselappend">
                {
                    this.state.livreurs.map((item,index)=>{
                      

                        return   <div id={index+"liv"} key={index+"x"+index} > <Livreur key={index} user={item} ></Livreur></div>
                       

                    })
                }
              </div>
              </div>
              </div>
              </div>
              </div>
              </section>  
            </div>

            <div className="separatort">Clients({this.state.clients.length})</div>
               
            <table id="dtClients" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
  <thead>
    <tr>
      <th className="th-sm">username

      </th>
      <th className="th-sm">Nom

      </th>
      <th className="th-sm">Prenom

      </th>
      <th className="th-sm">Adresse

      </th>
      <th className="th-sm">Mail

      </th>
      <th className="th-sm">Date Naissance

      </th>
      <th className="th-sm">Action

      </th>
    </tr>
  </thead>
  <tbody>
  
      { this.state.clients.map((item,index)=>{
        return <Clients key={index} user={item}> </Clients>
    })
}
</tbody>
</table>




            </div>
             )
    }
}