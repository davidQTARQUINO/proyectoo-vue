<template>
  <div>
    <br>
    
    <head>
      
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" />
    </head>
    <h1>Lugares contaminados</h1>
    <body>
      
      <div class="container">
        <div
          v-for="(panel, index) in panels"
          :key="index"
          :class="{ 'panel': true, 'active': index === activeIndex }"
          :style="{ backgroundImage: 'url(' + panel.image + ')' }"
          @click="activatePanel(index)"
        >
          <h3>{{ panel.text }}</h3>
        </div>
      </div>
    </body>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const panels = [
  {
    text: 'LAGO TITICACA',
    image:
      'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2022/8/21/esp_eco_sergio_2_cortesia_cesar_perez.jpg?itok=H_BBFo6I'
  },
  {
    text: 'URU-URU',
    image:
      'https://jornada.com.bo/wp-content/uploads/2021/04/contaminacion-lago-Uru-Uru.jpg'
  },
  {
    text: 'ALAJUELA Y CATARGO',
    image:
      'https://elmundo.cr/wp-content/uploads/2018/06/Cartago-municipalidad-basurero-1024x617.jpg'
  },
  {
    text: 'La Paz ',
    image:
      'https://s.france24.com/media/display/4fe54c68-3983-11e9-b2ed-005056bff430/w:1280/p:4x3/boliviagr.jpg'
  },
  {
    text: 'La Paz -El Alto   villa ingenio',
    image:
      'https://www.elaltodigital.com/wp-content/uploads/2020/11/botadero_-villa-ingenio.jpg'
  }
];

const activeIndex = ref(0);

function activatePanel(index) {
  activeIndex.value = index;
}
</script>

<style scoped>
body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 10;
}

.container {
  display: flex;
  width: 85vw;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #d4ff00;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;

}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}


</style>
