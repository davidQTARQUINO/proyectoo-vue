<template>
    <div>
      

      <div class="hero">
        <div class="container">
          <h1>Contaminacion ambiental</h1>
          <p>Cómo es en Bolivia</p>
        </div>
      </div>
  
      
      <section class="container content">
        <h2>La contaminación</h2>
        <p>En Bolivia se acumulan un poco más de 6 mil toneladas de basura al día, de las cuales el 87 por ciento se genera a nivel urbano y el restante 13 por ciento es de áreas rurales, según datos diagnósticos del Ministerio del Medio Ambiente.</p>
        <br>
        <p>De la cantidad total, el 60 por ciento es orgánico, un 20 por ciento es material reciclable y el resto son elementos no recuperables.</p>
        <br>
        <h2>¿Qué pasa con la basura en el país?</h2>
        <p>En Bolivia tenemos 339 municipios, de esos 339 municipios la gran mayoría no cuentan con una disposición adecuada de residuos sólidos. Contamos con once municipios con rellenos sanitarios en toda la norma. Hay un porcentaje importante de municipios que cuenta con botaderos controlados, 14 municipios y el resto, algo así como 314, han estado utilizando botaderos a cielo abierto, que son lugares de disposición de basura sin ningún tipo de tratamiento, señaló el ministro de Medio Ambiente y Agua, Carlos René Ortuño, durante una entrevista con el programa No Mentirás, hace unos días.</p>
        <br>
        <h2>Lugares contaminados en BOLIVIA</h2>
        <br>
        <img class="hero" src="/public/aire.jpg" width="1200" height="1000" alt="Contaminación atmosférica en Bolivia" />
      </section>
       
    </div>
  </template>
  
 
  <style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: #222;
  padding-bottom: 50px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  position: fixed;
  background-color: #222;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
}

.nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}

.nav a {
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
}

.nav.active {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav.active a {
  color: #000;
}

.nav.active .container {
  padding: 10px 0;
}

.nav a.current,
.nav a:hover {
  color: #c0392b;
  font-weight: bold;
}

.hero {
  background-image: url('https://www.foronuclear.org/wp-content/uploads/2010/06/degradacion-Tierra-854x465.jpg?x69276');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: -2;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.hero h1 {
  font-size: 46px;
  margin: -20px 0 20px;
}

.hero p {
  font-size: 20px;
  letter-spacing: 1px;
}

.content h2{
 color: #fbfbfb;
}
.content h3 {
  font-size: 150%;
  margin: 20px 0;
}

.content p {
  color: #7d7b7b;
  line-height: 40px;
  letter-spacing: 1.7px;
}

</style>