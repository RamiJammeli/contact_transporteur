import React, {Component} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from "./header.component";
import Footer from "./footer.component";

export  default class CreateDelivery extends Component {
    constructor(props) {
        super(props);


        this.onChangeReference_commande = this.onChangeReference_commande.bind(this);
        this.onChangePrix_initial = this.onChangePrix_initial.bind(this);
        this.onChangePrix_total = this.onChangePrix_total.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeType_livraison = this.onChangeType_livraison.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            reference_commande: '',
            adresse: '',
            prix_initial: 0,
            prix_total: 0,
            datelivraison: new Date(),
            type_livraison:'normal'
            
          }
        }



          onChangeReference_commande(e) {
            this.setState({
                reference_commande: e.target.value
            })  
          }
        
          
        
          onChangePrix_initial(e) {
            this.setState({
              prix_initial: e.target.value
            })
          }
          onChangePrix_total(e) {
            this.setState({
              prix_total: e.target.value
            })
          }


          onChangeAdresse(e) {
            this.setState({
              adresse: e.target.value
            })
          }
        
          onChangeDate(date) {
            this.setState({
              datelivraison: date
            })
          }

          onChangeType_livraison(e) {
            this.setState({
              type_livraison: e.target.value
            })
          }
        
          onSubmit(e) {
            e.preventDefault();
        
            const delivery = {
              reference_commande: this.state.reference_commande,
              adresse: this.state.adresse,
              prix_initial: this.state.prix_initial,
              prix_total: this.state.prix_total,
              datelivraison: this.state.datelivraison,
              type_livraison:this.state.type_livraison

            }
        
            axios.post('http://localhost:5000/deliveries/add', delivery)
              .then(res => console.log(res.data));
        
            this.setState({
              reference_commande: '',
            adresse: '',
            prix_initial: 0,
            prix_total: 0,
            datelivraison: new Date(),
            type_livraison:'normal'
            
            })
          }

    render() {
      return (
        <div>
          <Header/>
        <div>
          <h3>Créer une livraison</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>reference commande: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.reference_commande}
                  onChange={this.onChangeReference_commande}
                  />
              
            </div>
            <div className="form-group"> 
              <label>Adresse: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.adresse}
                  onChange={this.onChangeAdresse}
                  />
            </div>
            <div className="form-group">
              <label> Prix initial: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.prix_initial}
                  onChange={this.onChangePrix_initial}
                  />
            </div>

            <div className="form-group">
              <label> Prix total: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.prix_total}
                  onChange={this.onChangePrix_total}
                  />
            </div>
            <div className="form-group">
              <label>Date livraison: </label>
              <div>
                <DatePicker
                  selected={this.state.datelivraison}
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="form-group">
              <label> Type livraison: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.type_livraison}
                  onChange={this.onChangeType_livraison}
                  />
            </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="Valider" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <Footer/>
        </div>
        )
      }
}