import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '@/libs/firebase';

export const useAppAuthState = () => useAuthState(firebase.auth() as unknown as Parameters<typeof useAuthState>[0]);
