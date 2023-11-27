
<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" />
   
  </head>
  <body>
    <div class="container">
      <h2>Ingresa la cantidad de contenedores que supones que necesitamos en el pais</h2><br>
      <p>Se puede ingresar un maximo de 3 digitos en cada casilla </p>
      <div class="code-container">
        <input v-for="(code, idx) in codes" :key="idx" type="number" class="code" placeholder="0" min="0" max="9" required @keydown="handleKeyDown(idx, $event)">
      </div>
      <small class="info">
        Como se puede observar hay mas de 5 casillas , ya que se necesitan muchos contenedores en muchos municipios y departamentos como ciudades .
      </small>
      <br>
      <small class="info">
        El objetivo de esta innovacion es poder obtener mas contenedores y por eso necesitamos el registro en la pagina.
      </small>
    </div>
  </body>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const codes = ref([]);

onMounted(() => {
  codes.value = Array.from({ length: 6 }, () => ({
    value: '',
    focus: false,
  }));
  codes.value[0].focus = true;
});

const handleKeyDown = (idx, e) => {
  if (e.key >= '0' && e.key <= '9') {
    codes.value[idx].value = '';
    setTimeout(() => {
      if (idx < 5) {
        codes.value[idx + 1].focus = true;
      }
    }, 10);
  } else if (e.key === 'Backspace') {
    setTimeout(() => {
      if (idx > 0) {
        codes.value[idx - 1].focus = true;
      }
    }, 10);
  }
};
</script>

<style scoped>

body {
  background-color: #fbfcfe;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 10;
}

.container {
  background-color: #2c4335;
  border: 3px #000 solid;
  border-radius: 10px;
  padding: 300px;
  max-width: 1000px;
  text-align: center;
}

.code-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.code {
  caret-color: transparent;
  border-radius: 5px;
  font-size: 75px;
  height: 120px;
  width: 150px;
  border: 1px solid #eee;
  margin: 1%;
  text-align: center;
  font-weight: 300;
  
}

.code::-webkit-outer-spin-button,
.code::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.code:valid {
  border-color: #3498db;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
}

.info {
  background-color: #eaeaea;
  display: inline-block;
  padding: 10px;
  line-height: 20px;
  max-width: 400px;
  color: #000d64;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .code-container {
    flex-wrap: wrap;
  }

  .code {
    font-size: 60px;
    height: 80px;
    max-width: 70px;
  }
}

</style>
