import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDo-3W1uEXL1JkvQTaLLLFIwLzTvNOBfMA",
    authDomain: "linkedin-clone-17bc3.firebaseapp.com",
    projectId: "linkedin-clone-17bc3",
    storageBucket: "linkedin-clone-17bc3.appspot.com",
    messagingSenderId: "562245823446",
    appId: "1:562245823446:web:5e8ea339ce789861615277"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};