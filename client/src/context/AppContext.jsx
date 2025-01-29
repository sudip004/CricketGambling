import {createContext,useContext,useState} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  
  const [wholedata,setWholedata] = useState([])

  return (
    <AppContext.Provider value={{wholedata,setWholedata}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}