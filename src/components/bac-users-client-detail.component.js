import React, {Component} from 'react'
import axios from 'axios';
import $ from 'jquery'
import styles from '../css/detailuser.css'

let ischarge=0;
export default class BackUserDetail extends Component{

    constructor(props) {
        ischarge=0;
        super(props);

        this.state = {user:null};
      }
      

 
    componentDidMount() {
        console.log("didmo");
        $("#styleSign").attr("disabled", "disabled");
        $("#styleLogin").attr("disabled", "disabled");
        
       
       axios.get('http://localhost:5000/users//getByUserName/'+this.props.match.params.username)
       .then(response => {
           console.log(response.data);
         this.setState({ user: response.data })
         

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
                <div className="profile-usertitle-name"> {this.state.user.username} </div>
                <div className="profile-usertitle-job"> {this.state.user.discriminator} </div>
            </div>
            <div className="profile-userbuttons">
                <button type="button" className="btn btn-info  btn-sm">Supprimer</button>
                <button type="button" className="btn btn-info  btn-sm">Message</button>
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
                            <form>
                              <div className="form-group">
                                <label htmlFor="inputName">Nom</label>
                                <input type="text" className="form-control" id="inputName" value={this.state.user.nom} placeholder="Name"/>
                              </div>
                                <div className="form-group">
                                <label htmlFor="inputLastName">Prenom</label>
                                <input type="text" className="form-control" id="inputLastName" value={this.state.user.prenom} placeholder="Last Name" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.user.mail} placeholder="Email" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Adresse postal</label>
                                <input type="text" className="form-control" id="exampleInputAdresse1" value={this.state.user.adresse} placeholder="Password"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.user.password} placeholder="Password"/>
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