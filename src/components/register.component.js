import React, {Component} from 'react'
import $ from 'jquery';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export  default class Register extends Component {
  constructor(props) {
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
    this.setState({
      nom: e.target.value
    })
  }

  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeAdresse(e) {
    this.setState({
      adresse: e.target.value
    })
  }

  onChangeMail(e) {
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
      dateNaissance: this.state.dateNaissance
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      nom: '',
      prenom: '',
      password: '',
      adresse: '',
      mail:''
    })
  }

  componentDidMount() {
    $("#styleSign").removeAttr("disabled");
    $("#styleLogin").attr("disabled", "disabled");
    $("body").addClass("bg-default");
  }
    render() {
        return (
            <div className="main-content">
          
            <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
              <div className="container">
                <div className="header-body text-center mb-7">
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                      <h1 className="text-white">Create an account</h1>
                      <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
            </div>
            
            <div className="container mt--8 pb-5">
             
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="card bg-secondary border-0">
                    <div className="card-body px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Sign Up</small>
                      </div>
                      <form role="form" onSubmit={this.onSubmit}>
                        
                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                            </div>
                            <input className="form-control" placeholder="Nom" type="text" value={this.state.nom}
                onChange={this.onChangeNom} />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                            </div>
                            <input className="form-control" placeholder="Prenom" type="text" value={this.state.prenom}
                onChange={this.onChangePrenom} />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                            </div>
                            <input className="form-control" placeholder="Nom Utilisateur" type="text" value={this.state.username}
                onChange={this.onChangeUsername} />
                          </div>
                        </div>

                        

                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                            </div>
                            <input className="form-control" placeholder="Adresse Postal" type="text" value={this.state.adresse}
                onChange={this.onChangeAdresse} />
                          </div>
                        </div>


                        


                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                            </div>
                            <input className="form-control" placeholder="Email" type="email" value={this.state.mail}
                onChange={this.onChangeMail} />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                            </div>
                            <input className="form-control" placeholder="Password" type="password" value={this.state.password}
                onChange={this.onChangePassword} />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group input-group-merge input-group-alternative mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                            </div>
                            <DatePicker className="form-control"  selected={this.state.dateNaissance} onChange={this.onChangeDate}   />
                          </div>
                        </div>


                        <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                        <div className="row my-4">
                          <div className="col-12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                              <label className="custom-control-label" htmlFor="customCheckRegister">
                                <span className="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <input type="submit" className="btn btn-primary mt-4" value='Create account' />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}