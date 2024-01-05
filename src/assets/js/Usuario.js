import axios from "axios";

var url = `https://aname-a05m.onrender.com/API/Aname/V1`

export const registrarUsuarioFachada = async (body) => {
    return await registrarUsuario(body);
}

const registrarUsuario= async (body) => {
    return axios.post(url + `/usuario`, body).then(r => r.data)
}