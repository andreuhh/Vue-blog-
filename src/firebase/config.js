import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP_kZqVhMTszNL1uzamPAvR1_SE8yLOuo",
    authDomain: "vue-blog-22bd6.firebaseapp.com",
    projectId: "vue-blog-22bd6",
    storageBucket: "vue-blog-22bd6.appspot.com",
    messagingSenderId: "923395259380",
    appId: "1:923395259380:web:e5446bb013c2bd0b2397a1"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()

  export {projectFirestore}