<template>
   <div class="hello">
      <h1>{{ msg }}</h1>


      <p>Your Name: {{name}}</p>
      <input type="text" v-model="name" />
      <button @click="submitName">Submit</button>

      <form class="editor">
        <div class="cp">
    			<input type="button" @click="bold()" value="bold">
    			<input type="button" @click="underline()" value="underline">
    			<input type="button" @click="italic()" value="italic">
    			<input type="button" @click="link()" value="link">
    			<input type="button" @click="unlink()" value="remove link">
    			<input type="button" @click="unorderedList()" value="unordered list">
    			<input type="button" @click="orderedList()" value="ordered list">
    			<input type="file" value="image">
    		</div>

        <textarea name="textarea" v-html="editor"></textarea>
        <iframe width="700px" height="400px" id="editor" name="editor" v-model="editor"></iframe>
      </form>


      <ul class="list-group">
         <li class="list-group-item" v-for="user in allUsers">{{user.name}}</li>
      </ul>
   </div>
</template>

<script>
// import * as textEditor from '../textEditor'
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
      name: '',
      editor: ''
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
    bold: function() {
    	editor.document.execCommand('bold',false,null);
    },
    underline: function() {
    	editor.document.execCommand('underline',false,null);
    },
    italic: function() {
    	editor.document.execCommand('italic',false,null);
    },
    link: function() {
    	var theLink = prompt("Enter the URL:", "http://");
    	editor.document.execCommand('createLink',false,theLink);
    },
    unlink: function() {
    	editor.document.execCommand('unLink',false,null);
    },
    unorderedList: function() {
    	editor.document.execCommand('insertUnorderedList',false,'newUL');
    },
    orderedList: function() {
    	editor.document.execCommand('insertOrderedList',false,'newOL');
    }
  },
  mounted() {
    var iframe = document.getElementById('editor').contentDocument;
    iframe.designMode = 'on';
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
