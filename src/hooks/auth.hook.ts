import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '@/libs/firebase';
import type { Auth } from 'firebase/auth';

export const useAppAuthState = () => useAuthState(firebase.auth() as unknown as Auth);
