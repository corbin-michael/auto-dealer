<template>
   <div class="hello">
      <h1>{{ msg }}</h1>

      <medium-editor :text="editorText" :options="options" v-on:edit="applyTextEdit"></medium-editor>

      <br /><br />

      <button @click="submitContent">Submit Content</button>

      <br /><br />

      <code>
        {{editorText}}
      </code>

      <ul class="list-group">
         <li class="list-group-item" v-for="user in allUsers">{{user.name}}</li>
      </ul>

      <ul class="list-group">
         <li class="list-group-item" v-for="html in pageContent" v-html="html.content"></li>
      </ul>
   </div>
</template>

<script>
import firebaseApp from '../firebase'
import Editor from 'vue2-medium-editor'
const db = firebaseApp.database()
const users = db.ref('users')
const content = db.ref('pageContent')

export default {
  name: 'hello',
  components: {
    'medium-editor': Editor
  },
  firebase: {
    allUsers: users,
    pageContent: content
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      editorText: 'Write something!',
      options: {
        targetBlank: true
      }
    }
  },
  methods: {
    submitName: function() {
      console.log("Clicked");
      this.$firebaseRefs.allUsers.push({
         name: this.name
      })
      this.name = "";
    },
    submitContent: function() {
      db.ref('pageContent').push({
        content: this.editorText
      });
    },
    applyTextEdit: function(text) {
      this.editorText = text;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
