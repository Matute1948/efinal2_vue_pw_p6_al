<template>
    <div class="form-container">
      <h2>Ingrese un Vehiculo</h2>
      <form @submit.prevent="ingresar">
        <div class="form-group">
          <label for="Placa">Placa:</label>
          <input type="text" id="placa" v-model="this.vehiculo.placa" required />
        </div>
        <div class="form-group">
          <label for="Marca">Marca:</label>
          <input type="text" id="marca" v-model="this.vehiculo.marca" required />
        </div>
        <div class="form-group">
          <label for="Modelo">Modelo:</label>
          <input type="text" id="modelo" v-model="this.vehiculo.modelo" required />
        </div>
        <div class="form-group">
          <label for="Color">Color:</label>
          <input type="text" id="color" v-model="this.vehiculo.color" required />
        </div>
        <div class="form-group">
          <label for="Precio">Precio:</label>
          <input type="number" id="precio" v-model="this.vehiculo.precio" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  import {guardarFachada} from '../client/clienteVehiculos'
    export default{
      data() {
        return {
          vehiculo: {
            placa: '',
            marca: '',
            modelo: '',
            color: '',
            precio: Number
          }
          
        }
      },
      methods:{
        async ingresar(){
          guardarFachada(this.vehiculo);
          this.vehiculo.placa = "";
          this.vehiculo.marca = "";
          this.vehiculo.modelo = "";
          this.vehiculo.color = "";
          this.vehiculo.precio=0;
          alert(`El vehiculo se ha ingresado correctamente`);
        }
      }
    };
    
  
  </script>
  
  <style>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="datetime-local"],
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  