<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <form>
        <div class="form-group">
            <label>chave privada</label>
            <input class="form-control">
        </div>
        <div class="form-group">
            <label>chave publica</label>
            <input class="form-control">
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
      msg: 'App'
    }
  },
  mounted () {
  },
  methods: {
    gerar: function (event) {
      alert('teste')
      this.$http.get('http://172.17.0.3/gerar')
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
