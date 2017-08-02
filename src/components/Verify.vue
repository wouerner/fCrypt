<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <form>
        <div class="form-group">
            <label>texto</label>
            <textarea class="form-control" v-model="text"></textarea>
        </div>
        <div class="form-group">
            <label>chave publica</label>
            <textarea class="form-control" v-model="pubKey"></textarea>
        </div>
        <div class="form-group">
            <label>assinatura: {{verificacao}}</label>
            <textarea class="form-control" v-model="assinatura"></textarea>
        </div>
        <button v-on:click="gerar" type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'key',
  data () {
    return {
      msg: 'Verify',
      text: '',
      assinatura: '',
      verificacao: '',
      pubKey: ''
    }
  },
  mounted () {
  },
  methods: {
    gerar: function (event) {
      this.$http.post('http://172.17.0.3/verificar', { assinatura: this.assinatura, pubKey: this.pubKey, text: this.text }, {emulateJSON: true}).then(response => {
        this.verificacao = response.body
      })
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
