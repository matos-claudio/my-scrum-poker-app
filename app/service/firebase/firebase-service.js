import * as firebase from "firebase";

//iOS-Client 605178659127-net19bu4mqmr7ma58t5vb62blhf6k7vl.apps.googleusercontent.com

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
                reject(this.response(500, null, 'A senha deve ter pelo menos 6 caracteres'))
            } else if (error.code === 'auth/email-already-in-use'){
                reject(this.response(500, null, 'O endereço de email já está sendo usado por outra conta'))
            }
        })
    })  
  }

  signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      this.firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        console.log(`result >>> ${JSON.stringify(user)}`)
      }).catch(error => {
        console.log(`error >>> ${JSON.stringify(error)}`)
      })
    })
  }

  onAuthStateChanged = () => {
    this.firebase.auth().onAuthStateChanged(user => {
      console.log(`user >>> ${JSON.stringify(user)}`)
    })
  }

  response = (code, data,  message) => {
    return { code, data, message };
  }
}
