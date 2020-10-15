import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDPmG2ThrZtqmYWawmDNIrNO_ZQvnLxG54",
    authDomain: "pxl-flix.firebaseapp.com",
    databaseURL: "https://pxl-flix.firebaseio.com",
    projectId: "pxl-flix",
    storageBucket: "pxl-flix.appspot.com",
    messagingSenderId: "292930244136",
    appId: "1:292930244136:web:fe0a292a73cb73a6952f1d"
};

const firebase = Firebase.initializeApp(config);

export { firebase };