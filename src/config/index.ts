import type { IAppConfig } from '@/interfaces/config.interface';
import { env } from '@/env.mjs';

// env.NODE_ENV may generate a server access runtime error
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'development';

const appConfig: IAppConfig = {
  // App configuration
  env: {
    isProd: NODE_ENV === 'production',
    isDev: NODE_ENV === 'development',
    isTest: NODE_ENV === 'test',
    get isServer() {
      return typeof window === 'undefined' ? true : false;
    },
    get isClient() {
      return typeof window !== 'undefined' ? true : false;
    },
    vars: env,
  },
  theme: {
    brandColor: '#3787eb',
  },
  firebase: {
    apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
  auth: {
    // Pass in signInOptions to avoid circular deps: Eg. [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID]
    ui: (signInOptions) => ({
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      signInOptions,
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      },
    }),
  },
};

export default appConfig;
