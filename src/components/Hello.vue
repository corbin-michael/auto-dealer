<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <p>Your Name: {{name}}</p>
      <input type="text" v-model="name" />
      <p :click="submitName">Submit</p>


    <ul>
      <li v-for="user in allUsers">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import firebaseApp from '../firebase'
const db = firebaseApp.database()
const users = db.ref('users')

export default {
  name: 'hello',
  firebase: {
    allUsers: users
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: ''
    }
  },
  methods: {
    submitName: function() {
      users.set({
        user: this.name
      });
      this.name = "";
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
