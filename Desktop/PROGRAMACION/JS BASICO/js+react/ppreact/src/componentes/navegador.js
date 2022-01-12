import React, {Component} from "react";

class Navegacion extends Component{
    
    render(){
      return(
        <nav  className="navbar navbar-dark bg-dark justify-content-center"> 
          <h1 className="text-white">
           {
             this.props.titulo
           }
          </h1>
          <br></br>


        </nav>
      )
    }
}
export default Navegacion;