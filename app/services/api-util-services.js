import * as firebase from "firebase";
import { COLLECTION_OF_USERS, COLLECTION_OF_TEAMS } from "../helper/constants";

export default class ApiUtilServices {
  constructor() {}

  createUserWithEmailAndPasswordService = async (email, password) =>
    await firebase.auth().createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = async (email, password) =>
    await firebase.auth().signInWithEmailAndPassword(email, password);

  logoutFirebase = async () => await firebase.auth().signOut();

  getUser = async (UID) =>
    await firebase
      .database()
      .ref(`${COLLECTION_OF_USERS}/${UID}`)
      .once("value");

  saveUser = async (data, UID) =>
    await firebase.database().ref(`${COLLECTION_OF_USERS}/${UID}`).set(data);

  deleteUser = async () => await firebase.auth().currentUser.delete();

  saveTeam = async (data) =>
    await firebase.database().ref(`${COLLECTION_OF_TEAMS}`).push(data);

  getTeams = async () => {
    return await firebase.database().ref(`${COLLECTION_OF_TEAMS}`).once('value');
  };
}
