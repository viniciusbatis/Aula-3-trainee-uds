<template>
  <div>
    <div class="info">
      <h1>{{ nome }}</h1>
      <h1>{{ endereco }}</h1>
      <h1>{{ cpf }}</h1>
      <h1>{{ rg }}</h1>
      <h1>{{ signo }}</h1>
    </div>
    <div>
      <router-link id="voltar" to="/Menu">Voltar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Renato Francisco Manuel Gonçalves',
  data() {
    return {
      msg: 'Meu MENU',
      nome: 'Vinicius Fogaça',
      endereco: 'Av.Maua - 1848',
      cpf: '825.351.419-06',
      rg: '39.085.814-6',
      signo: 'Escorpião',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  transition: color 1s,font-style 1s;

}
h1:hover{
  color:blue;
  font-style: italic;
}
</style>
