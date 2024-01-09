<template>
  <div id="cont">
    <h2 class="fw-bold">Registrar Usuario</h2>

    <form @submit.prevent="registrarUsuario()">

      <div class="form-group">
        <label for="email">Nombres:</label>
        <input type="text" class="form-control bordeCaja" id="email" v-model="nombres" required>
      </div>

      <div class="form-group">
        <label for="email">Apellidos:</label>
        <input type="text" class="form-control bordeCaja" id="email" v-model="apellidos" required>
      </div>

      <div class="card-body">
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control bordeCaja" id="password" name="password" v-model="password">
        </div>
      </div>

      <div class="form-group">
        <label for="email">Dirección:</label>
        <input type="text" class="form-control bordeCaja" id="email" v-model="direccion" required>
      </div>

      <div class="form-group">
        <label for="email">Ciudad:</label>
        <input type="text" class="form-control bordeCaja" id="email" v-model="ciudad" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control bordeCaja" id="email" v-model="email" required>
      </div>

      <hr class="mb-4">

      <div class="row">
        <label for="categoria">Fecha de nacimiento:</label>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="year">Año</label>
          <input v-model="fechaNacimiento" type="datetime-local" class="form-control bordeCaja" id="year" name="year"
            required>
        </div>
      </div>
      <div class="form-group">


        <label for="gender">Género</label>
        <select v-model="genero" class="form-control bordeCaja" id="gender" name="gender" required>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>

      <br>
      <div v-if="email" class="row">
        <div class="form-group">
          <label for="imageUpload" class="colorTexto fw-bold"> Seleccionar foto de perfil:</label>
          <input type="file" @change="fotoPerfil" class="form-control-file" id="imageUpload">
        </div>
      </div>
      <br>
      <div v-if="email" class="row">
        <div class="form-group">
          <label for="imageUpload" class="colorTexto fw-bold">Seleccionar imagen del documento:</label>
          <input type="file" @change="fotoDocumento" class="form-control-file" id="imageUpload">
        </div>
      </div>
      <button type="submit" class="btn btn-danger">Registrar</button>

    </form>

  </div>
</template>

<script>
import { registrarUsuarioFachada } from '@/assets/js/Usuario'
import { enviarSimpleFachada } from '@/assets/js/Email'
import { cargaArchivosFachada } from '@/assets/js/Archivo'
export default {

  data() {
    return {
      nombres: null,
      apellidos: null,
      direccion: null,
      ciudad: null,
      email: null,
      password: null,
      perfil: null,
      id: null,
      estado: null,
      genero: null,
      fechaNacimiento: null,
      foto: null,
      documento: null,
      fotoResponse: null,
      documentoResponse: null
    }
  },
  methods: {
    fotoPerfil(event) {
      // Accede al archivo seleccionado
      const file = event.target.files[0];

      // Realiza las operaciones que necesites con el archivo
      console.log('Archivo seleccionado:', file);
      this.foto = file;

      this.cargaFoto();
    },
    fotoDocumento(event) {
      // Accede al archivo seleccionado
      const file = event.target.files[0];

      // Realiza las operaciones que necesites con el archivo
      console.log('Archivo seleccionado:', file);
      this.documento = file;

      this.cargarArchivos();
    },
    async cargarArchivos() {
      this.documentoResponse = await cargaArchivosFachada(this.documento, "doc-identidad", this.email);
    },
    async cargaFoto() {
      this.fotoResponse = await cargaArchivosFachada(this.foto, "fotografia", this.email);
    },
    registrarUsuario() {
      const usuario = {
        id: 0,
        nombres: this.nombres,
        apellidos: this.apellidos,
        email: this.email,
        password: this.password,
        rol: "ATL",
        estado: true,
        direccion: this.direccion,
        sexo: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        ciudad: this.ciudad,
        documentoIdentidad: this.documentoResponse,
        fotografia: this.fotoResponse
      };

      registrarUsuarioFachada(usuario)
        .then((response) => {
          try {
            console.log(response.status);
            if (response.status === 410) {
              alert("Ya existe un usuario con el email:" + this.email)
            } else {
            
              const body = {
                toUser: this.email,
                subject: "Registro Usuario",
                message: "Usuario registrado con éxito"
              }
              enviarSimpleFachada(body);
              alert("Usuario registrado con éxito")
              this.id = null;
              this.nombres = null;
              this.apellidos = null;
              this.email = null;
              this.password = null;
              this.perfil = null;
              this.estado = null;
              this.direccion = null;
              this.genero = null;
              this.fechaNacimiento = null;
              this.ciudad = null;
              this.foto = null;
              this.documento = null;
              this.fotoResponse = null;
              this.documentoResponse = null;
            }
          } catch (error) {
            alert("Ha ocurrido un error al procesar la respuesta del servidor")
            console.log(error);
          }
        })
        .catch((error) => {
          alert("Ha ocurrido un error al guardar, prueba a cambiar el nombre de usuario")
          console.log(error);
        });
    }
  },
}
</script>
<style scoped>
#cont {
  width: auto;
  margin: 30px auto;
  background-color: #fff2f1;
  border: 5px solid #003153;
  border-radius: 12px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
}

@media (min-width: 320px) {
  #cont {
    padding-left: 30px;
    padding-right: 30px;
  }
}

h2 {
  text-align: center;
  color: #003153;
}


.bordeCaja {
  border: 2px solid #efca08;
}

.colorTexto {
  color: #3083dc;
}

.btn {
  margin: 10px 40%;
}

</style>