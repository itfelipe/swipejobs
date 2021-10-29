import { Alert } from "react-native";
import { baseApi } from "../base"
import env from '../../config/env'

interface RejectJobProps {
  jobId:string;
}

const acceptJob = async (props:RejectJobProps) => {
  const { jobId} = props
  const workerId = env.WORKER_ID

  await baseApi.get(`/${workerId}/job/${jobId}/accept`).then(res=>{
    if(!res.data.success){
  Alert.alert(
    "Ohh, that's a problem...",
    `${res.data.message}. 😔`,
    [
      {
        text: "Ok",
        style: "cancel",
      },
    ],
  );
  } 
  else{
  Alert.alert(
    "You accepted this job!",
    "Thank you for your interest. We will send you an email as soon as possible. 😁",
    [
      {
        text: "Ok",
        style: "cancel",
      },
    ],
  );
  }

   return res.data
  
  }).catch(error=>{
    Alert.alert(
    "Something gone wrong",
    "Try again later",
    [
      {
        text: "Ok",
        style: "cancel",
      },
    ],
  );
  })
  
  
 
  

}
export default acceptJob;