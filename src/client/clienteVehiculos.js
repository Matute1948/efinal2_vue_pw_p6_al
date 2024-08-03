import axios from "axios";



const eliminar = async (placa) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Consecionaria/vehiculo/${placa}`).then(r => r.data);
    return data;

}

const buscar = () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Consecionaria/vehiculo/`).then(r => r.data);
    return data;
}

const guardar = async (body) => {
    
    const data = axios.post(`http://localhost:8080/API/v1.0/Consecionaria/vehiculo/`, body).then(r => r.data);
    console.log(data);
    return data;
}

//fachada


export const guardarFachada = async (body) => {
    return await guardar(body);
}

export const eliminarFachada = async (placa) =>{
    return await eliminar(placa);
}

export const buscarFachada = async () =>{
    return await buscar();
}




