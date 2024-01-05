import axios from "axios";

var url = `https://aname-a05m.onrender.com/API/Aname/V1`

export const cargaArchivosFachada = async (file, contenedor, email) => {
    return await cargaArchivos(file, contenedor, email);
}

const cargaArchivos = async (file, contenedor, email) => {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('contenedor', contenedor);
    formData.append('email', email);


    return axios.post(url + `/files`,  formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(r => r.data)
}