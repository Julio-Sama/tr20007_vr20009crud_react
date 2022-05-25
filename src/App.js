import logo from './logo.svg';
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter
} from "reactstrap";

const Articulo = [
  {id: 1, nombreArticulo: "Piratas del caribe 1", tipoArticulo: "Pelicula DVD", genero:"Accion", precio:12.50},
  {id: 2, nombreArticulo: "The Office", tipoArticulo: "Serie DVD", genero:"Comedia Sitcom", precio:10.11},
  {id: 3, nombreArticulo: "FIFA 21", tipoArticulo: "Videojuego DVD", genero:"Deportes", precio:60.00}
]

class App extends React.Component{

  state = {
    Articulo : Articulo
    
  };

  render(){
    return(<>
    <Container>
      <br/>
      <Button color='success'>Insertar nuevo articulo</Button>
      <br/><br/>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>TIPO</th>
            <th>GENERO</th>
            <th>PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Articulo.map((elemento)=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombreArticulo}</td>
              <td>{elemento.tipoArticulo}</td>
              <td>{elemento.genero}</td>
              <td>{elemento.precio}</td>
              <td>
                <Button color='primary'>Editar</Button>{""}
                <Button color='danger'>Eliminar</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>

    <Modal>
            <ModalHeader>
              <div><h3>Editar registro de articulo</h3></div>
            </ModalHeader>
            
            <ModalBody>
              <FormGroup>
                <label>ID:</label>
                <input className='form-control' 
                readOnly type="text" value={this.state.form.id}/>
              </FormGroup>

              <FormGroup>
                <label>NOMBRE</label>
                <input className='form-control' name='nombreArticulo'
                type="text" onChange={this.handelChange} 
                value={this.state.form.nombreArticulo}/>
              </FormGroup>

              <FormGroup>
                <label>TIPO</label>
                <input className='form-control' name='tipoArticulo'
                type="text" onChange={this.handelChange} 
                value={this.state.form.tipoArticulo}/>
              </FormGroup>

              <FormGroup>
                <label>GENERO</label>
                <input className='form-control' name='genero'
                type="text" onChange={this.handelChange} 
                value={this.state.form.genero}/>
              </FormGroup>

              <FormGroup>
                <label>PRECIO</label>
                <input className='form-control' name='precio'
                type="text" onChange={this.handelChange} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                data-type="currency" value={this.state.form.genero}/>
              </FormGroup>

            </ModalBody>

    </Modal>       

    </>)
  }
}

export default App;
