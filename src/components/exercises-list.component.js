import React, {Component} from 'react'
import Header from "./header.component";
import Footer from "./footer.component";

export  default class ExercisesList extends Component {
   
    render() {
        return (
            
            <div> 
                <Header/>
                <p> ExercisesList ena </p>
                <form > 
                    <fieldset>
                        <legend>ceci est un form</legend>
                    nom: <input  type="text"  value="elee" readOnly="readonly" /> <br/>
                    password <input  type="password" placeholder="entrer password" /> <br/>
                    age : <input type="number" /> <br/>
                    homme : <input type="checkbox" name="r1" />
                    femme : <input type="checkbox" name="r2" /> <br/>

                    technologie : <select >
                                    <option>c# </option>
                                    <option selected="selected">java</option>
                                    <option>php</option>
                                    <option>javascript</option>

                                </select> <br/>
                    <input type="button" value="button normal" />
                    <input type="reset" value="annuler" />
                    <input type="submit" value="button submit" />
                    <textarea rows="10" ></textarea>
                    </fieldset>
                </form>
                <Footer/>
            </div>
        )
    }
}

