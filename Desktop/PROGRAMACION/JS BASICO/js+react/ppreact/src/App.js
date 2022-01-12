import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Navegacion from './componentes/navegador';
import todo from './datos.json';

class App extends Component{
  constructor(){
    super();
    this.state = todo
   }

  render() {
    const tareas = this.state.todo.map((todo,i)=>{
      return(

          <div className="container col-md-4">
            <div>
            
              <div className="card-header"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
                <h3>{todo.Titulo}</h3>
                <span class="badge rounded-pill bg-danger">
                Urgencia: {todo.Prioridad}
                </span>
              </div>
              <div className="card-body">
                {todo.Responsable}
              </div>

            </div>
          </div>
      )

    })
    return (
      <div className="App">
      
        
          <Navegacion titulo="Tareas"/>


        <div className="container">
          <div className="row mt-4">
            {tareas}
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" /> 
      </div>
  );

  }
}

export default App;
