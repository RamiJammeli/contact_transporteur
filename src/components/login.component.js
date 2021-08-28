import React, {Component} from 'react'
import $ from 'jquery'
import loginimqge from '../../src/login.png'
export  default class Login extends Component {
    componentDidMount() {
        $("#styleSign").attr("disabled", "disabled");
        $("#styleLogin").removeAttr("disabled");
      }
    render() {
        return (
            <div className="wrapper fadeInDown">
            <div id="formContent">
             
              <div className="fadeIn first">
                <img src={loginimqge} id="icon" alt="User Icon" height="250"  />
              </div>
          
                 <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
              </form>
          
            
              <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
              </div>
          
            </div>
          </div>
        )
    }
}