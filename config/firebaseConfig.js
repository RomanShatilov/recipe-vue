import firebase from "firebase";
import 'firebase/firestore';

const configOptions = {
  apiKey: "AIzaSyBLO92IVthMkNbe7nqzjmZk8TKEAtcDcpI",
  authDomain: "kopfjager-project.firebaseapp.com",
  databaseURL: "https://kopfjager-project.firebaseio.com",
  projectId: "kopfjager-project",
  storageBucket: "kopfjager-project.appspot.com",
  messagingSenderId: "949901221438",
  appId: "1:949901221438:web:3e47c7c8c013cd2c11bb6f"
};

firebase.initializeApp(configOptions);

// firebase utils
const db = firebase.firestore();
const recipeCollection = db.collection('recipe-list');

export default {
  db,
  recipeCollection
}
// import firebase from 'firebase'
// import 'firebase/firestore'
//
// // firebase init goes here
// const config = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: ""
// }
// firebase.initializeApp(config)
//
// // firebase utils
// const db = firebase.firestore()
// const auth = firebase.auth()
// const currentUser = auth.currentUser
//
// // date issue fix according to firebase
// const settings = {
//   timestampsInSnapshots: true
// }
// db.settings(settings)
//
// // firebase collections
// const recipeollection = db.collection('recipe')
//
// export {
//   db,
//   auth,
//   currentUser,
//   recipeollection
// }