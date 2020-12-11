import * as firebase from "firebase";
import { COLLECTION_OF_USERS } from "../helper/constants";

export default class ApiUtilServices {
  constructor() {
    // this.firebase = this.loadConfiguration();
    // this.loadConfiguration();
  }

  createUserWithEmailAndPasswordService = async (email, password) =>
    await firebase.auth().createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = async (email, password) =>
    await this.firebase.auth().signInWithEmailAndPassword(email, password);

  // onAuthStateChanged = () =>
  //   firebase.auth().onAuthStateChanged((user) => {
  //     return user;
  //   });

  onAuthStateChanged = async () => {
    this.firebase.auth().onAuthStateChanged(function(user) {
      console.log(`USUARIO >>> ${JSON.stringify(user)}`)
      return user;
    });
    //user.
    //return user
  };

  logoutFirebase = async () => await firebase.auth().signOut();

  getUser = async (UID) =>
    await firebase
      .database()
      .ref(`${COLLECTION_OF_USERS}/${UID}`)
      .once("value");

  saveUser = async (data, UID) =>
    await firebase.database().ref(`${COLLECTION_OF_USERS}/${UID}`).set(data);

  deleteUser = async () => await firebase.auth().currentUser.delete();

  loadConfiguration = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDAncPBdlss8YNjM2YIfvLKEYu6c5VQAps",
      authDomain: "my-scrum-app.firebaseapp.com",
      databaseURL: "https://my-scrum-app.firebaseio.com",
      projectId: "my-scrum-app",
      storageBucket: "my-scrum-app.appspot.com",
      messagingSenderId: "469510168452",
      appId: "1:469510168452:web:4ef498f739d4905e4747d1",
      measurementId: "G-WQS4MP2SNN",
    };

    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    // }
    return firebase;
  };
}
