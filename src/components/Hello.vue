<template>
   <div class="hello">
      <h1>{{ msg }}</h1>


      <p>Your Name: {{name}}</p>
      <input type="text" v-model="name" />
      <button @click="submitName">Submit</button>


      <ul class="list-group">
         <li class="list-group-item" v-for="user in allUsers">{{user.name}}</li>
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
      console.log("Clicked");
      this.$firebaseRefs.allUsers.push({
         name: this.name
      })
      this.name = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
