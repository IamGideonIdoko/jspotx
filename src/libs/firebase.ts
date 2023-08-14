// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import appConfig from '@/config';

if (!firebase.apps.length) {
  console.log('Firebase initialized');
  firebase.initializeApp(appConfig.firebase);
}

export default firebase;
