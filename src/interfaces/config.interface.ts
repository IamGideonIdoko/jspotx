import { env } from '@/env.mjs';
import type { Props as AuthUIProps } from 'react-firebaseui';

interface EnvConfig {
  isProd: boolean;
  isDev: boolean;
  isTest: boolean;
  isServer: boolean;
  isClient: boolean;
  vars: typeof env;
}

interface ThemeConfig {
  brandColor: string;
}

type FirebaseConfig = Record<
  'apiKey' | 'authDomain' | 'projectId' | 'storageBucket' | 'messagingSenderId' | 'appId',
  string
>;

interface AuthConfig {
  ui: (sigInOptions: AuthUIProps['uiConfig']['signInOptions']) => AuthUIProps['uiConfig'];
}

export interface IAppConfig {
  env: EnvConfig;
  theme: ThemeConfig;
  firebase: FirebaseConfig;
  auth: AuthConfig;
}
