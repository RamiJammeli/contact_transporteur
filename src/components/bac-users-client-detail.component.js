import React, {Component} from 'react'
import axios from 'axios';
import $ from 'jquery'
import styles from '../css/detailuser.css'

let ischarge=0;
export default class BackUserDetail extends Component{

    constructor(props) {
  
        ischarge=0;
        super(props);
            
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
          username: '',
          nom: '',
          prenom: '',
          password: '',
          adresse: '',
          mail:'' ,
          dateNaissance: new Date(),
          createdAt:new Date(),
          discriminator:''
        }
   
  
      }
      
     
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
      onChangeDate(dateNaissance) {
        this.setState({
          dateNaissance: dateNaissance
        })
      }
      onChangeNom(e) {
        ischarge=1;
        this.setState({
          nom: e.target.value
        })
      }
    
      onChangePrenom(e) {
        ischarge=1;
        this.setState({
          prenom: e.target.value
        })
      }
    
      onChangePassword(e) {
        ischarge=1;
        this.setState({
          password: e.target.value
        })
      }
    
      onChangeAdresse(e) {
        ischarge=1;
        this.setState({
          adresse: e.target.value
        })
      }
    
      onChangeMail(e) {
        ischarge=1;
        this.setState({
          mail: e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          nom:this.state.nom,
          prenom:this.state.prenom,
          password:this.state.password,
          adresse:this.state.adresse,
          mail:this.state.mail,
          dateNaissance: this.state.dateNaissance,
          discriminator:'Client'
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/update/'+this.state.username,user)
          .then(res => console.log(res.data));
    
          alert("Client modifié")
       
      }
      
 
    componentDidMount() {
        console.log("didmo");
        $("#styleSign").attr("disabled", "disabled");
        $("#styleLogin").attr("disabled", "disabled");
        
       
       axios.get('http://localhost:5000/users//getByUserName/'+this.props.match.params.username)
       .then(response => {
           console.log(response.data);
          
         this.setState({
          username: response.data.username,
          nom: response.data.nom,
          prenom: response.data.prenom,
          password: response.data.password,
          adresse: response.data.adresse,
          mail:response.data.mail,
          createdAt:response.data.createdAt,
          discriminator:response.data.discriminator
        })

       })
       .catch((error) => {
         console.log(error);
       })
       ischarge=1;

  }


    render(){
    return(
       <div style={{position:'absolute', background:'#e9ecf3', width:'100%'}}  >
          
           <br/>
           {
           ischarge && 
               
           
        
            
            <div className="container"  className={styles}> 
<div className="col-md-12">  
    <div className="col-md-4">      
        <div className="portlet light profile-sidebar-portlet bordered">
            <div className="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-responsive" alt=""/> </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name"> {this.state.username} </div>
                <div className="profile-usertitle-job"> {this.state.discriminator} </div>
            </div>
            <div className="profile-userbuttons">
                <button type="button" className="btn btn-info  btn-sm">Supprimer</button>
                <button type="button" className="btn btn-info  btn-sm">Message</button>
            </div>
            <div className="profile-userbuttons">
              <hr/>
                
                <b> Date de création: {this.state.createdAt.split('T')[0]}</b>
                <hr/>
                <b>nombre de commande : 10</b>
                <hr/>
                <b>nombre de réclamation : 3</b>
            </div>
             </div>
    </div>
    <div className="col-md-8"> 
        <div className="portlet light bordered">
            <div className="portlet-title tabbable-line">
                <div className="caption caption-md">
                    <i className="icon-globe theme-font hide"></i>
                    <span className="caption-subject font-blue-madison bold uppercase">Detail</span>
                </div>
            </div>
            <div className="portlet-body">
                <div>
                

                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Profile</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Livraison</a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Reclamation</a></li>
                        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Historique profil</a></li>
                    </ul>
                

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">
                            <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                <label htmlFor="inputName">Nom</label>
                                <input type="text" className="form-control" onChange={this.onChangeNom} id="inputName" value={this.state.nom} placeholder="Name"/>
                              </div>
                                <div className="form-group">
                                <label htmlFor="inputLastName">Prenom</label>
                                <input type="text" className="form-control" id="inputLastName" onChange={this.onChangePrenom} value={this.state.prenom} placeholder="Last Name" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onChangeMail} value={this.state.mail} placeholder="Email" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Adresse postal</label>
                                <input type="text" className="form-control" id="exampleInputAdresse1" onChange={this.onChangeAdresse} value={this.state.adresse} placeholder="Password"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onChangePassword} value={this.state.password} placeholder="Password"/>
                              </div>
                              
                             
                              <button type="submit" className="btn btn-default">Modifier</button>
                              
                            </form>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="profile">Profile</div>
                        <div role="tabpanel" className="tab-pane" id="messages">Messages</div>
                        <div role="tabpanel" className="tab-pane" id="settings">Settings</div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    }
    
       </div>
    )
}
}