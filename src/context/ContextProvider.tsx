import React, {createContext,useContext, useState} from 'react';

export const Context = createContext({});

export const ContextProvider = ({children}) => {

  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [jobsData, setJobsData] = useState()


  const addUserInfo = userInfo =>{
    setUserInfo(userInfo)
  }
  const addJobsData = jobsData =>{
    setJobsData(jobsData)
  }

  return (
    <Context.Provider value={{
      userInfo, addUserInfo, 
      jobsData, addJobsData,
      loading, setLoading,
      }}> 
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)