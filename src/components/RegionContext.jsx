import {createContext, useState} from 'react'

const RegionContext = createContext();

export function RegionProvider({children}) {
    const [region, setRegion] = useState("default");

    const values = {
        region,
        setRegion
    }

  return (
    <RegionContext.Provider value={values}>
        {children}
    </RegionContext.Provider>
  )
}

export default RegionContext