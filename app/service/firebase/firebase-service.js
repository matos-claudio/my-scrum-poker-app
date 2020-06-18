import * as firebase from "firebase";

export default class FirebaseService {
  constructor() {
    this.firebase = this.loadConfiguration();
  }

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

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    return firebase;
  };

  storeHighScore = (userId, score) => {
    this.firebase.database().ref('users/' + userId).set({
      highscore: score
    });
  }

  setupHighscoreListener(userId) {
    this.firebase.database().ref('users/' + userId).on('value', (snapshot) => {
      const highscore = snapshot.val().highscore;
      console.log("New high score: " + highscore);
    });
  }

  createUserWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
        this.firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
            console.log(`userCreate >>> ${JSON.stringify(response)}`)
        }).catch(error => {
            console.log(`errorCreate >>> ${JSON.stringify(error)}`)
            if(error.code === 'auth/weak-password'){
                reject(this.response(500, 'A senha deve ter pelo menos 6 caracteres'))
            } else if (error.code === 'auth/email-already-in-use'){
                reject(this.response(500, 'O endereço de email já está sendo usado por outra conta'))
            }
        })
    })  
  }

  response = (code, message) => {
    return { code, message };
  }
}
