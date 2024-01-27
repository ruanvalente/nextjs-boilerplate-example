import { FetchDataType } from '@/constants/types/fetchdata-type'
import { createContext, useEffect, useState } from 'react'

type FetchDataContextType = {
  fetchData: () => Promise<void>
  data: FetchDataType | null
}

type FetchDataProviderProps = {
  children: React.ReactNode
}

const FetchDataContext = createContext<FetchDataContextType>(
  {} as FetchDataContextType,
)

export const FetchDataProvider: React.FC<FetchDataProviderProps> = ({
  children,
}: FetchDataProviderProps) => {
  const [data, setData] = useState<FetchDataType | null>({} as FetchDataType)

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const fetchedData = await response.json()
      setData(fetchedData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <FetchDataContext.Provider value={{ fetchData, data }}>
      {children}
    </FetchDataContext.Provider>
  )
}
