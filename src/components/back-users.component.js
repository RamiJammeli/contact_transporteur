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
          

          }, 2000)
       
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
                <div class="separatort">Administateurs({this.state.admins.length})</div>
                </div>
                <div className="row" style={{position: 'relative',left: '10%',marginRight:"23%", marginTop:"10px"}}>
                {
                    this.state.admins.map((item,index)=>{
                        return <Admins user={item} ></Admins>
                    })
                }
            </div>

            <div class="separatort">Livreurs({this.state.livreurs.length})</div>

            <div className="row" style={{position: 'relative',left: '10%',marginRight:"23%", marginTop:"10px"}}>
                {
                    this.state.livreurs.map((item,index)=>{
                        return <Livreur user={item} ></Livreur>
                    })
                }
                
            </div>

            <div class="separatort">Clients({this.state.clients.length})</div>


            <table id="dtClients" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">username

      </th>
      <th class="th-sm">Nom

      </th>
      <th class="th-sm">Prenom

      </th>
      <th class="th-sm">Adresse

      </th>
      <th class="th-sm">Mail

      </th>
      <th class="th-sm">Date Naissance

      </th>
      <th class="th-sm">Action

      </th>
    </tr>
  </thead>
  <tbody>
  
      { this.state.clients.map((item,index)=>{
        return <Clients user={item}> </Clients>
    })
}
</tbody>
</table>




            </div>
             )
    }
}