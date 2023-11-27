<script setup>
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

</script>

<template>
  <div>
    <nav class="nav" :class="{ 'active': isNavActive }">
      <div class="container">
        <h1 class="logo"><router-link to="/">Contaminacion en Bolivia</router-link></h1>
        <ul>
          <li><router-link to="/" :class="{ 'current': $route.path === '/' }">INICIO</router-link></li>
          <li><router-link to="/imagenes" :class="{ 'current': $route.path === '/imagenes' }">IMAGENES</router-link></li>
          <li><router-link to="/innovacion" :class="{ 'current': $route.path === '/innovacion' }">INNOVACION</router-link></li>
          <li><router-link to="/formulario" :class="{ 'current': $route.path === '/formulario' }">REGISTRO</router-link></li>
          <li><router-link to="/resumen" :class="{ 'current': $route.path === '/resumen' }">RESUMEN</router-link></li> 
          <li><router-link to="/contactos" :class="{ 'current': $route.path === '/contactos' }">CONTACTOS</router-link></li>
        </ul>
      </div>
    </nav>
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

.content h2,
.content h3 {
  font-size: 150%;
  margin: 20px 0;
}

.content p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
}

</style>
