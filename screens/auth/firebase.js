// Config file
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDF1_85pzD0krYEG3npU8Vv9Z8ZAAi7bGU",
  authDomain: "pop-academy-auth.firebaseapp.com",
  databaseURL: "https://pop-academy-auth.firebaseio.com",
  projectId: "pop-academy-auth",
  storageBucket: "pop-academy-auth.appspot.com",
  messagingSenderId: "267379252410",
  appId: "1:267379252410:web:f19d099050fb3e39f23683"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
