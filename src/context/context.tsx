import { createContext, ReactNode, useEffect, useState } from "react"
export interface RobuxProps  {
    id: number,
    valueRobux: number,
    starRating: number,
    value: number,
   } 

export interface ComentsProps {
    name: string;
    Comment: string;
    starRating: number;
}

interface ContextTypes {
    RobuxForSell: RobuxProps[];
    productId: number;
    InformationRobux: (id: number) => void;
    CommentsArray: ComentsProps[];
    value: number | null;
    CatalogStarRating: (valueStar:number) => void;
}

interface ContextProviderProps {
    children: ReactNode
   }

export const RobuxForSell = [
    {
        id:1,
        valueRobux: 500,
        starRating: 1,
        value: 14.99,
    },
    {
        id:2,
        valueRobux: 1000,
        starRating: 3,
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
        starRating: 4,
        value: 299.99,
    },
]

export const CommentsArray = [
    {
        name: "Victor",
        Comment: "Gostei muito de comprar nessa loja",
        starRating: 4.5,
    },
    {
        name: "Geovane",
        Comment: "chegou em 2 horas, muito rapido!!",
        starRating: 5,
    },
    {
        name: "Julia",
        Comment: "Suporte incrivel, recebi 1 dia depois",
        starRating: 3,
    },
    {
        name: "Gerson",
        Comment: "Que descontão, consegui comprar muitos robux por conta disso",
        starRating: 4.5,
    },
]

const labels: { [index: string]: string} = {
    0.5: 'Detestavel',
    1: 'Horrivel',
    1.5: 'Muito Ruim',
    2: 'Ruim',
    2.5: 'Podia ser melhor',
    3: 'Mais ou menos',
    3.5: 'Bom',
    4: 'Muito Bom',
    4.5: 'Incrivel',
    5: 'Perfeito',
}

    

export const ContextContents = createContext({} as ContextTypes)

export function ContextProvider({children}: ContextProviderProps) {

    const [value, setValue] = useState<number | null>(5)

    const [ productId, setProductId ] = useState(1)

    function CatalogStarRating(ValueStar: number) {
        setValue(ValueStar)
    }

    function InformationRobux(id : number) {
        setProductId(id)
    }

      return (
          <ContextContents.Provider
            value={{
                RobuxForSell,
                InformationRobux,
                productId,
                CommentsArray,
                value,
                CatalogStarRating,
            }}
          >
            {children}
          </ContextContents.Provider>
        )
       }