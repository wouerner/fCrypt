<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <form>
        <div class="form-group">
            <label>chave privada</label>
            <textarea class="form-control" v-model="privKey"></textarea>
        </div>
        <div class="form-group">
            <label>chave publica</label>
            <textarea row="30" class="form-control" v-model="pubKey"></textarea>
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
      msg: 'App',
      privKey: '',
      pubKey: ''
    }
  },
  mounted () {
  },
  methods: {
    gerar: function (event) {
      this.$http.get('http://172.17.0.3/gerar').then(response => {
        this.privKey = response.body.privKey
        this.pubKey = response.body.pubKey
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
