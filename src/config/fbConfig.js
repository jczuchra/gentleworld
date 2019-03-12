  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth'

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBArRMe3OC4MWvF3muMN0L1A9oIz1L3iok",
      authDomain: "gentleworld-8a9d4.firebaseapp.com",
      databaseURL: "https://gentleworld-8a9d4.firebaseio.com",
      projectId: "gentleworld-8a9d4",
      storageBucket: "gentleworld-8a9d4.appspot.com",
      messagingSenderId: "473373729001"
  };
  firebase.initializeApp(config);

  export default firebase;