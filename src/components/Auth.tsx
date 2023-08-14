'use client';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '@/libs/firebase';
import appConfig from '@/config';

function Auth() {
  return (
    <StyledFirebaseAuth
      uiConfig={appConfig.auth.ui([firebase.auth.GoogleAuthProvider.PROVIDER_ID])}
      firebaseAuth={firebase.auth()}
    />
  );
}

export default Auth;
