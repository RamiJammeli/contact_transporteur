import React, {Component} from 'react'
import $ from 'jquery'
import loginimqge from '../../src/login.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

export  default class Login extends Component {
   
    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        
        this.onChangePassword = this.onChangePassword.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',          
          password: '',
         
        }
        
      }

      refreshPage(){ 
        setTimeout(()=>{
          window.location.reload(false);
      }, 500);
      console.log('page to reload')
    }

      onChangeUsername(e){
          this.setState({
              username:e.target.value
          })
console.log('http://localhost:5000/users/getByUsername/'+e.target.value);
        axios.get('http://localhost:5000/users/getByUsername/'+e.target.value)
        .then(response => {

            if (response.data==null) {
              $("#errorusername").show();
            }else{
                $("#errorusername").hide();
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }

      onChangePassword(e){
          this.setState({
              password:e.target.value
          })
      }

      onSubmit(e) {
        e.preventDefault();
    
        axios.get('http://localhost:5000/users/getByUserNamePassword/'+this.state.username+"/"+this.state.password)
        .then(response => {
            
            if (response.data==null) {
              alert("vérifier vos parametres");
            }else{
                alert("connecté");
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
        this.setState({
          username: '',         
          password: '',         
        })
      }
   
    componentDidMount() {
        $("#styleSign").attr("disabled", "disabled");
        $("#styleLogin").removeAttr("disabled");
      }
    render() {
        return (
          <div>
            <Link to="/" onClick={this.refreshPage} style={{fontSize:15}}>Accueil</Link>
          
            <div className="wrapper fadeInDown">
              
            <div id="formContent">
             
              <div className="fadeIn first">
                <img src={loginimqge} id="icon" alt="User Icon" height="250"  />
              </div>
          
                 <form onSubmit={this.onSubmit}>
                <input required type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={this.state.username}
                onChange={this.onChangeUsername} />

                <p id="errorusername" style={{color: "red"}}> username invalide </p>


                <input required type="text" value={this.state.password}
                onChange={this.onChangePassword} id="password" className="fadeIn third" name="login" placeholder="password" />
                
                <p id="errorpassword" style={{color: "red"}}> password invalide </p>
               
                <input type="submit" className="fadeIn fourth" value="Log In" />
              </form>
          
            
              <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
              </div>
          
            </div>
          </div>
          </div>
        )
    }
}