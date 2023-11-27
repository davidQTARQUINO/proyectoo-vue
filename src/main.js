import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';


import BarMenu from './components/BarMenu.vue';
import Home from './components/Home.vue';
import ImgDesl from './components/ImgDesl.vue';
import Cuadros from './components/Cuadros.vue';
import Innova from './components/Innova.vue';
import formulario from './components/formulario.vue';
import Trsboton from './components/Trsboton.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/imagenes', component: ImgDesl },
  { path: '/innovacion', component: Cuadros },
  { path: '/contactos', component: Innova },
  { path: '/formulario', component: formulario }, 
  { path: '/resumen', component: Trsboton },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');

