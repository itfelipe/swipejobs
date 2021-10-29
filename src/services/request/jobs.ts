import { baseApi } from "../base"
import env from '../../config/env'

const getJobsData = async () => {
  const workerId = env.WORKER_ID
  const response = await baseApi.get(`/${workerId}/matches`)

  let jobsInfosArray = []

  for(var i in response.data){
    let jobsInfo = {
    jobId:response.data[i].jobId,
    title:response.data[i].jobTitle.name,
    company:response.data[i].company,
    imageUrl:response.data[i].jobTitle.imageUrl,
    address:response.data[i].company.address,
    reportTo:response.data[i].company.reportTo,
    wagePerHour:response.data[i].wagePerHourInCents,
    milesDistance:response.data[i].milesToTravel,
    shifts:response.data[i].shifts,
    requirements:response.data[i].requirements,
  }

  jobsInfosArray.push(jobsInfo)
  
}
  return jobsInfosArray
  

}
export default getJobsData;