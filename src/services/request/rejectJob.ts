import { Alert } from "react-native";
import { baseApi } from "../base"
import env from '../../config/env'

interface RejectJobProps {
  jobId:string;
}

const rejectJob = async (props:RejectJobProps) => {
  const {jobId} = props
  const workerId = env.WORKER_ID
  await baseApi.get(`/${workerId}/job/${jobId}/reject`).then(response=>{
     if(!response.data.success){
  Alert.alert(
    "Ohh, that's a problem... ",
    `${response.data.message}. 😔`,
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
    "You rejected this job.",
    "We hope you find another one that fit's better. 😉",
    [
      {
        text: "Ok",
        style: "cancel",
      },
    ],
  );
  }
  return response.data
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
export default rejectJob;