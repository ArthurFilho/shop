import { createContext, ReactNode, useState } from "react"

export interface RobuxProps  {
    id: number,
    valueRobux: number,
    starRating: number,
    value: number,
   } 

interface ContextTypes {
    RobuxForSell: RobuxProps[];
    productId: number;
    InformationRobux: (id: number) => void;
}

interface ContextProviderProps {
    children: ReactNode
   }

export const RobuxForSell = [
    {
        id:1,
        valueRobux: 500,
        starRating: 5,
        value: 14.99,
    },
    {
        id:2,
        valueRobux: 1000,
        starRating: 5,
        value: 24.99,
    },
    {
        id:3,
        valueRobux: 5000,
        starRating: 5,
        value: 149.99,
    },
    {
        id:4,
        valueRobux: 10000,
        starRating: 5,
        value: 299.99,
    },
]

export const ContextContents = createContext({} as ContextTypes)

export function ContextProvider({children}: ContextProviderProps) {

    const [ productId, setProductId ] = useState(1)

    function InformationRobux(id : number) {
        setProductId(id)
    }

      return (
          <ContextContents.Provider
            value={{
                RobuxForSell,
                InformationRobux,
                productId,
            }}
          >
            {children}
          </ContextContents.Provider>
        )
       }