<template>
    <div class="container-tabla">
      <button @click="consultar">Consultar</button>
      <div class="tabla">
        <div class="tabla-header">
          <label>Placa</label>
          <label>Marca</label>
          <label>Modelo</label>
          <label>Acción</label>
          <label>Acción</label>
        </div>
        <div class="tabla-row" v-for="(auto, index) in autos" :key="index">
          <label>{{ auto.placa }}</label>
          <label>{{ auto.marca }}</label>
          <label>{{ auto.modelo }}</label>
          <button @click="verAuto(auto)">Ver</button>
          <button @click="borrarAuto(auto.placa, index)">Borrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { buscarFachada, eliminarFachada } from '../client/clienteVehiculos';
  
  export default {
    data() {
      return {
        autos: []  
      };
    },
    methods: {
      async consultar() {
        try {
          this.autos = await buscarFachada();
        } catch (error) {
          console.error('Error al consultar autos:', error);
        }
      },
      verAuto(auto) {
        alert(`Detalles del auto: ${auto.placa} - ${auto.marca} - ${auto.modelo}`);
      },
      async borrarAuto(placa, index) {
        try {
          await eliminarFachada(placa);
          this.autos.splice(index, 1);  
        } catch (error) {
          console.error('Error al eliminar auto:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container-tabla {
    margin: 20px;
  }
  
  .tabla {
    display: grid;
    grid-template-columns: repeat(5, 100px);
    gap: 10px;
  }
  
  .tabla-header {
    display: contents;
    font-weight: bold;
  }
  
  .tabla-row {
    display: contents;
  }
  
  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  button {
    cursor: pointer;
  }
  </style>
  