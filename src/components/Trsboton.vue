

<template>
  <div>
    <br>
    <H1><br>MIRANDO LAS IMAGENES VEREMOS QUE TODO ES NECESARIO PARA VIVIR </H1>
    <img class="hero" src="/public/arbol.jpg" width="900" height="700"  />
    <img class="hero" src="/public/empresa.jpg" width="900" height="700"  />
    <img class="hero" src="/public/fresco.jpg" width="900" height="700"  />
    <p>Las imagenes mostradas son las que nos permiten vivir pero tambien nos mata , ya que no hay aire fresco o un buen medio ambiente <br>con las empresas 
    en funcionamiento , ya que son las causantes de generar mas humo , pero tambien son las que generan aparatos, esta pagina no seria posible si no fuese 
  por esas empresas ya que son ellas las que fabricaron los componentes de esta computadora. </p>
  <br>
    <h1>EL SIGUIENTE JUEGO NOS HARA ENTENDER QUE NO PODEMOS TENER TODO </h1>
    
      <P>debemos cuidar todo pero , no podemos tener todo lo que deseamos</P>
    <div class="toggle-container">
      <input type="checkbox" id="aire" class="toggle" v-model="aire">
      <label for="aire" class="label">
        <div class="ball"></div>
      </label>
      <span>Aire</span>
    </div>

    <div class="toggle-container">
      <input type="checkbox" id="arboles" class="toggle" v-model="arboles">
      <label for="arboles" class="label">
        <div class="ball"></div>
      </label>
      <span>Arboles</span>
    </div>

    <div class="toggle-container">
      <input type="checkbox" id="ambiente" class="toggle" v-model="ambiente">
      <label for="ambiente" class="label">
        <div class="ball"></div>
        </label>
        <span>Empresas</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aire: false,
      arboles: false,
      ambiente: false
    };
  },
  watch: {
    aire(newVal) {
      this.doTheTrick('aire', newVal);
    },
    arboles(newVal) {
      this.doTheTrick('arboles', newVal);
    },
    ambiente(newVal) {
      this.doTheTrick('ambiente', newVal);
    }
  },
  methods: {
    doTheTrick(clickedOption, value) {
      if (this.aire && this.arboles && this.ambiente) {
        if (clickedOption === 'aire' && value) {
          this.ambiente = false;
        }
        if (clickedOption === 'arboles' && value) {
          this.aire = false;
        }
        if (clickedOption === 'ambiente' && value) {
          this.arboles = false;
        }
      }
    }
  }
};
</script>




<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.toggle-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 200px;
}

.toggle {
  visibility: hidden;
}

.label {
  position: relative;
  background-color: #d0d0d0;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 0;
  width: 80px;
  height: 40px;
}

.toggle:checked + .label {
  background-color: #8e44ad;
}

.ball {
  background: #fff;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  align-items: center;
  justify-content: center;
  animation: slideOff 0.3s linear forwards;
}

.toggle:checked + .label .ball {
  animation: slideOn 0.3s linear forwards;
}

@keyframes slideOn {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(40px) scale(1);
  }
}

@keyframes slideOff {
  0% {
    transform: translateX(40px) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}


</style>