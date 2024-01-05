<script>

</script>

<template>
  <!--Carrusel-->
  <div class="container">
    <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/img-slide-01.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h3 style="color: #ffffff; text-align:left; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);">ASOCIACIÓN NACIONAL DE
            ATLETISMO MÁSTER</h3>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/img-slide-02.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/img-slide-03.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/img-slide-04.jpg" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/img-slide-05.jpg" class="d-block w-100" alt="">
        </div>
      </div>
      <!--botón anterior-->
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <!--botón siguiente-->
      <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>

  <!--Barra navegacion-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary w-100 ">
    <div class="container-fluid">
      <img src="../../assets/img/logofin.png" alt="Logo" width="75" height="75">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>

          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Inscripción</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Campeonato</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Administración</a>
          </li>
        </ul>
        <div class="float-end">
          <router-link to="/login" class="btn btn-danger">Iniciar Sesión</router-link>
          <router-link to="/registro" class="btn btn-danger ms-3">Registrarse</router-link>
        </div>
      </div>
    </div>
  </nav>

  <div>
    <!-- Contenido -->
    <main>
      <div class="container" id="contenido">
        <div class="col" id="banner">
          <img class="img-fluid mx-auto d-block" alt="Banner Principal" src="@/assets/img/bannerprincipal.png">
        </div>

        <div class="card mb-2" id="cardPersonalizada">
          <div class="row g-4">
            <div class="col-md-6">
              <img src="@/assets/img/card_a.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="card-body">
                <h5 class="card-title fs-2 fw-bold text-center" id="textCard1">ANAME como parte del Sistema Deportivo
                  Nacional
                </h5>
                <p class="card-text" id="textCard1">El atletismo master acoge a deportistas desde los 30 años en adelante,
                  divididos en modalidades de acuerdo a las edades de los participantes.
                  En Ecuador la organización promotora de estas competencias es la Asociación Nacional de Atletas Master
                  del
                  Ecuador (ANAME).</p>
                <p class="card-text" id="textCard2"><small>La ANAME fue fundada el 18 de septiembre de 2011.</small></p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="infoRelacionada">
          <div>
            <h2 class="text-center text-uppercase" id="textTitleInfo">Información Relacionada</h2>
          </div>
          <div class="row">
            <div class="col" style="border-right: 4px solid #d62828;">
              <a href="https://asudama.org/"><img src="@/assets/img/logo-asudama.png" class="imgAsudama"></a>
            </div>
            <div class="col" style="padding-top: 10px;">
              <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
                <div class="card-body">
                  <h5 class="card-title fw-bold">2024 SOUTH AMERICAN COMBINED EVENTS CHAMPIONSHIPS</h5>
                  <p class="card-text">Location: Mar de Plata, Argentina</p>
                  <a href="https://asudama.org/" class="card-link" style="color: #d62828;">Más información</a>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col" style="border-right: 4px solid #d62828;">
              <a href="https://world-masters-athletics.org/championships/2024-european-championships-indoor/"><img
                  src="@/assets/img/ema-logo.png" class="imgWma"></a>
            </div>
            <div class="col" style="padding-top: 10px;">
              <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
                <div class="card-body">
                  <h5 class="card-title fw-bold">2024 EUROPEAN CHAMPIONSHIPS INDOOR</h5>
                  <p class="card-text">Location: Torún, Poland</p>
                  <a href="https://world-masters-athletics.org/championships/2024-european-championships-indoor/"
                    class="card-link" style="color: #d62828;">Más información</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Pie de página -->
    <footer style="background-color: #003153; color: #fff2f1; display: flex; justify-content: space-around;">
      <div>
        <h6>Contacto</h6>
        <!-- <p>Calle principal, #, Calle Secundaria</p> -->
        <!-- <p>Sector</p> -->
        <p style="align: left">099 440 0437</p>
        <p style="align: left">caaguilar30@hotmail.com</p>
      </div>

      <div>
        <h6>Información</h6>
        <a href="https://asudama.org/" style="color: #efca08; align: left;">asudama.org</a>
        <p style="align: left"></p>
        <a href="https://www.featle.org.ec/" style="color: #efca08; align: left;">featle.org.ec</a>
      </div>

      <div>
        <h6>Redes Sociales</h6>
        <a href="https://www.facebook.com/p/ANAME-Asociaci%C3%B3n-Nacional-de-Atletismo-Master-del-Ecuador-100064841912450/?paipv=0&eav=AfaSv9pzpI9ergJbpLVMMNEX0dEx9-1RJWBzc4GFil1sb49W38fNLM9QEMSUzDbZtN0&_rdr"
          style="color: #efca08; align:left;">Facebook</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.carousel-item {
  max-height: 348px;
  /* Ajusta la altura */
}

.carousel-item img {
  width: auto;
  height: auto;
}

#banner {
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 4px solid #d62828;
}

#cardPersonalizada {
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #3083dc;
}

#textCard1 {
  color: black;
}

#textCard2 {
  color: #efca08;
}

#textTitleInfo {
  margin-top: 50px;
}

.imgWma {
  width: 170px;
  height: auto;
  margin-top: 30px;
}

.imgAsudama {
  height: 150px;
}

#infoRelacionada {
  padding-bottom: 15px;
}

#contenido {
  background-color: #fff2f1;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;
}

</style>