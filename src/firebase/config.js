import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage'





const firebaseConfig = {
  apiKey: "AIzaSyAXmKvNVi8Bs7cQBYDPFBPJTlsSIxlhVo0",
  authDomain: "olx-clone-6a19a.firebaseapp.com",
  projectId: "olx-clone-6a19a",
  storageBucket: "olx-clone-6a19a.appspot.com",
  messagingSenderId: "171360729777",
  appId: "1:171360729777:web:79c83f4eb3cb05b9360090",
  measurementId: "G-VD4M6QXQGD"
};


  export default firebase.initializeApp(firebaseConfig)