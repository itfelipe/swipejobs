import axios from "axios";
import env from '../config/env'


export const baseApi = axios.create({
  baseURL: env.SWIPE_JOBS_TEST_API_URL,
  timeout: 15000,
});
