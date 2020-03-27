// Config file
import * as firebase from "firebase";

const config = Expo.Constants.manifest.extra.firebase

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
