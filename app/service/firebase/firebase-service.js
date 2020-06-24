import * as firebase from "firebase";

//iOS-Client 605178659127-net19bu4mqmr7ma58t5vb62blhf6k7vl.apps.googleusercontent.com
// const IOS_CLIENT_ID =
//   "605178659127-net19bu4mqmr7ma58t5vb62blhf6k7vl.apps.googleusercontent.com";
// const ANDROID_CLIENT_ID =
//   "605178659127-unqlgb32hqf4ksm9ofbu3anfjoiat3v3.apps.googleusercontent.com";

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

  createUserWithEmailAndPassword = (email, password, name) => {
    return new Promise((resolve, reject) => {
        this.firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
          this.saveUserDatabase(user, name)
          resolve(this.response(200, user, 'OK'))
        }).catch(error => {
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
        resolve(this.response(200, user, 'OK'));
      }).catch(error => {
        if(error.code === 'auth/wrong-password'){
          reject(this.response(500, null, 'A senha é inválida ou o usuário não tem uma senha'))
        } else if (error.code === 'auth/user-not-found'){
          reject(this.response(500, null, 'Não há registro de usuário correspondente a esse identificador. O usuário pode ter sido excluído.'))
        }
      })
    })
  }

  onAuthStateChanged = async () => {
    return new Promise((resolve, reject) => {
      this.firebase.auth().onAuthStateChanged(user => {
        if(user != null){
          resolve(this.response(200, user, 'OK'))
        } else {
          reject(this.response(500, null, 'Erro'))
        }
      })
    })
  }

  logoutFirebase = async () => {
    //const { type, accessToken } = await  
    const result = this.firebase.auth().signOut()
    console.log(`result >>> ${JSON.stringify(result)}`)
  }

  // storeHighScore = (userId, score) => {
  //   this.firebase.database().ref('users/' + userId).set({
  //     highscore: score
  //   });
  // }

  // setupHighscoreListener(userId) {
  //   this.firebase.database().ref('users/' + userId).on('value', (snapshot) => {
  //     const highscore = snapshot.val().highscore;
  //     console.log("New high score: " + highscore);
  //   });
  // }

  getUserDatabase = (uid) => {
    return new Promise((resolve, reject) => {
      this.firebase.database().ref(`users/${uid}`).once('value').then(user => {
        resolve(this.response(200, user, 'OK'))
      }).catch(error => {
        console.log("error: " + JSON.stringify(error));
        reject(this.response(500, null, ''))
      })
    })
  }

  saveUserDatabase = (data, name) => {
    this.firebase.database().ref('users/'+ data.user.uid).set({
      name,
      email: data.user.email,
      active: true
    })
  }

  response = (code, data,  message) => {
    return { code, data, message };
  }
}
