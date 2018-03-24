<template>
  <form>
    <div class="">
      <p>{{positivoOuNegativo}}</p>
      <p>{{parOuImpar}}</p>
      <label for="numero">Digite um número: </label>
      <input type="number" name="number" v-model="entrada">
      <button id="custom" type="button" @click="somarValor()">Somar</button>
      <button id="custom" type="button" @click="subtrairValor()">Subtrair</button>
      <label>{{valor}}</label>
      <router-link id="voltar" to="/Menu">Voltar</router-link>
    </div>
  </form>
</template>
<script>
export default{
  data() {
    return {
      valor: 0,
      entrada: null,
    };
  },
  methods: {
    somarValor() {
      this.valor += parseInt(this.entrada, 10);
    },
    subtrairValor() {
      this.valor -= parseInt(this.entrada, 10);
    },
  },
  computed: {
    positivoOuNegativo() {
      if (this.valor > 0) {
        return 'positivo';
      }
      return 'negativo';
    },
    parOuImpar() {
      if (this.valor % 2 === 0) {
        return 'par';
      }
      return 'impar';
    },
  },
};
</script>
<style>
  #custom{
  border-radius: 10px;
  background-color: skyblue;
  color: blue;
  }
</style>
