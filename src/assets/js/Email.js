import axios from "axios";

var url = `https://aname-a05m.onrender.com/API/Aname/V1`

export const enviarSimpleFachada = async (body) => {
    console.log(body)
    return await enviarSimple(body);
}

const enviarSimple = async (body) => {
    return axios.post(url + `/usuario/email/enviarSimple`, body).then(r => r.data)
}

export const enviarArchivoFachada = async (body) => {
    return await enviarArchivo(body);
}

const enviarArchivo = async (body) => {
    return axios.post(url + `/usuario/email/enviarArchivo`, body).then(r => r.data)
}