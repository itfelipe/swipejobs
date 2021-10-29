import { baseApi } from "../base"
import env from '../../config/env'

const getProfileData = async () => {

  const workerId = env.WORKER_ID
  const response = await baseApi.get(`/${workerId}/profile`)
  return response.data
}

export default getProfileData;