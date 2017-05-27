import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyA6SsZUy_WJ1DtVwuylo_dUs-PC-GRX5SI",
  authDomain: "auto-cms-8d8a3.firebaseapp.com",
  databaseURL: "https://auto-cms-8d8a3.firebaseio.com",
  projectId: "auto-cms-8d8a3",
  storageBucket: "auto-cms-8d8a3.appspot.com",
  messagingSenderId: "1002315536435"
})

export default firebaseApp
