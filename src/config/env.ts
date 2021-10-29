import env, { NativeConfig } from 'react-native-config';

interface Env extends NativeConfig {
  SWIPE_JOBS_TEST_API_URL:string;
  WORKER_ID:string;
  GEOCODING_BASE_URL:string;
  GOOGLE_API_KEY:string;
}

const nEnv = env as Env;

export default nEnv;
