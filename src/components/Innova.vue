<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th class="encabezado">Nombre</th>
          <th class="encabezado">Apellidos</th>
          <th class="encabezado">Correo</th>
          <th class="encabezado">celular</th>
          <th class="encabezado">Edad</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td class="card">{{ user.firstName }}</td>
          <td class="card">{{ user.lastName }}</td>
          <td class="card">{{ user.email }}</td>
          <td class="card">{{ user.point }}</td>
          <td class="cardN">{{ user.New }}</td>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { firstName: 'David', lastName: 'Quisbertt.Tarquino', email: 'dquisberttt@umsa.bo', point: 75843727, New: 18 },
        { firstName: 'David', lastName: 'Quisbertt.Tarquino', email: 'dquisberttt@umsa.bo', point: 75843727, New: 19 },
        { firstName: 'David', lastName: 'Quisbertt.Tarquino', email: 'dquisbertt@fcpn.edu.bo', point: 75843727, New: 20 },
     
      ]
    };
  }
};
</script>

<style scoped>
.encabezado {

  height: 10px;
  background-color: #223e65;
  color: rgb(245, 245, 245);
  padding: 10px;
}

.card {
  width: 300px;
  height: 100px;
  background-color: #48700c;
  color: rgb(255, 255, 255);
  padding-inline: 10px;
}

.cardN {
  width: 300px;
  background-color: #597a28;
  color: rgb(255, 255, 255);
}
</style>