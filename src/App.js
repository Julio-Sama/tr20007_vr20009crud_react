import logo from './logo.svg';
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter
} from "reactstrap";

const datos = [
  {id: 1, nombre: "Piratas del Caribe", tipo: "Pelicula", fechaRenta: "25/05/2022", fechaRegreso: "30/05/2022", precio: 29, cantidad: 1},
  {id: 2, nombre: "Stranger Things", tipo: "Serie", fechaRenta: "20/05/2022", fechaRegreso: "25/05/2022", precio: 10.99, cantidad: 2}
];
class App extends React.Component{

  estado = {
    datos: datos,
    form: {
      id: '',
      nombre: '',
      tipo: '',
      fechaRenta: '',
      fechaRegreso: '',
      precio: '',
      cantidad: ''
    },
    mdInsertar: false,
    mdActualizar: false,
  };

  handleChange = e =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  mostrarInsertar = () => {
    this.setState({
    mdInsertar: true,
    });
  }
  cerrarInsertar = () => {
    this.setState({ mdInsertar: false });
  }

  mostrarActualizar = (reg) => {
    this.setState({
      form: reg,
      mdActualizar: true,
    });
  }
  cerrarActualizar = () => {
    this.setState({ mdActualizar: false });
  }

  insertar = () => {
    var nuevo = { ...this.estado.form };
    nuevo.id = this.estado.datos.length + 1;
    var list = this.estado.datos;
    list.push(nuevo);
    this.setState({ mdInsertar: false, data: list });
  }

  editar = (reg) => {
    var cont = 0;
    var array = this.estado.datos;
    array.map((registro) => {
      if (reg.id === registro.id) {
        array[cont].nombre = reg.nombre;
        array[cont].tipo = reg.tipo;
        array[cont].fechaRenta = reg.fechaRenta;
        array[cont].fechaRegreso = reg.fechaRegreso;
        array[cont].precio = reg.precio;
        array[cont].cantidad = reg.cantidad;
      }
      cont++;
    });
    this.setState({ datos: array, mdActualizar: false });
  }

  eliminar = (reg) => {
    var opc = window.confirm("¿Está seguro de eliminar el registro?" + reg.id);
    if (opc === true) {
      var cont = 0;
      var arreglo = this.estado.datos;
      arreglo.map((registro) => {
        if (reg.id === registro.id) {
          arreglo.splice(cont, 1);
        }
        cont++;
      });
      this.setState({ datos: arreglo, mdActualizar: false });
    }
  };

  render(){
    return(<>
    <Container>
      <br />
      <Button color='success' onClick={() => this.mostrarInsertar()}>Nueva Renta</Button>
      <br/><br />

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Fecha de Renta</th>
            <th>Fecha de Devolucion</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {this.estado.datos.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.tipo}</td>
              <td>{e.fechaRenta}</td>
              <td>{e.fechaRegreso}</td>
              <td>{e.precio}</td>
              <td>{e.cantidad}</td>
              <td><Button color="primary"
                          onClick={() => this.mostrarActualizar(e)} >Editar
                  </Button>{" "}
                  <Button color='danger'
                          onClick={()=> this.eliminar(e)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

    <Modal isOpen={this.estado.mostrarActualizar}>
      <ModalHeader>
        <div><h3>Editar el pedido de Renta</h3></div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <label>ID:</label>
          <input className='form-control'
          readOnly
          type="text"
          value={this.estado.form.id} />
        </FormGroup>

        <FormGroup>
          <label>Nombre</label>
          <input className='form-control'
          name='nombre' type="text" onChange={this.handleChange}
          value={this.estado.form.nombre} />
        </FormGroup>

        <FormGroup>
          <label>Tipo</label>
          <input className='form-control'
          name='tipo' type="text" onChange={this.handleChange}
          value={this.estado.form.tipo} />
        </FormGroup>

        <FormGroup>
          <label>Fecha de Renta</label>
          <input className='form-control'
          name='fecharenta' type="text" onChange={this.handleChange}
          value={this.estado.form.fechaRenta} />
        </FormGroup>

        <FormGroup>
          <label>Fecha de Devolucion</label>
          <input className='form-control'
          name='devolucion' type="text" onChange={this.handleChange}
          value={this.estado.form.fechaRegreso} />
        </FormGroup>

        <FormGroup>
          <label>Precio</label>
          <input className='form-control'
          name='precio' type="text" onChange={this.handleChange}
          value={this.estado.form.precio} />
        </FormGroup>

        <FormGroup>
          <label>Cantidad</label>
          <input className='form-control'
          name='cantidad' type="text" onChange={this.handleChange}
          value={this.estado.form.cantidad} />
        </FormGroup>

      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={() => this.editar(this.estado.form)}>Editar</Button>
        <Button color='danger' onClick={() => this.cerrarActualizar()}> Cancelar </Button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={this.estado.mdInsertar}>
      <ModalHeader>
        <div><h3>INSERTAR NUEVO Registro</h3></div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <label>ID: </label>
          <input className='form-control' readOnly type='text' value={this.estado.datos.length + 1} />
        </FormGroup>

        
        <FormGroup>
          <label>Nombre</label>
          <input className='form-control'
          name='nombre' type="text" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <label>Tipo</label>
          <input className='form-control'
          name='tipo' type="text" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <label>Fecha de Renta</label>
          <input className='form-control'
          name='fecharenta' type="text" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <label>Fecha de Devolucion</label>
          <input className='form-control'
          name='devolucion' type="text" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <label>Precio</label>
          <input className='form-control'
          name='precio' type="text" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <label>Cantidad</label>
          <input className='form-control'
          name='cantidad' type="text" onChange={this.handleChange} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
          <Button color="success" onClick={() => this.insertar()}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={() => this.cerrarInsertar()} >
            Cancelar
          </Button>
        </ModalFooter>
    </Modal>

    </>) // fin
  }
}

export default App;
