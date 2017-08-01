<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <form>
        <div class="form-group">
            <label>Texto</label>
            <textarea class="form-control" v-model="privKey"></textarea>
        </div>
        <div class="form-group">
            <label>chave privada</label>
            <textarea row="30" class="form-control" v-model="privKey"></textarea>
        </div>
        <div class="form-group">
            <label>assinatura</label>
            <input class="form-control" v-model="assinatura">
        </div>
        <button v-on:click="gerar" type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      msg: 'App',
      privKey: '',
      text: '',
      assinatura: ''
    }
  },
  mounted () {
  },
  methods: {
    gerar: function (event) {
      this.$http.post('http://172.17.0.3/assinar', {privKey: 'teste'}, {emulateJSON: true})
    }
  }
}
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
</style>
