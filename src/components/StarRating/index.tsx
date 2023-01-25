import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useEffect, useState } from "react";

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

export function StarRating() {
    
    const [value, setValue] = useState<number | null>(5)
    const [hover, setHover] = useState(-1) 
    
    const [sellRate, setSellRate] = useState<number>()

    const mathRandom = Math.floor(Math.random() * 256);

    useEffect(() => {
        setSellRate(mathRandom)
    }, [])

    return(
        <Box>
                    <Rating  
                     name="hover-feedback"
                     value={value}
                     precision={0.5}
                     readOnly
                     onChange={(event, newvalue) => {
                        setValue(newvalue)
                     }}
                     onChangeActive={( event, newHover)=>{
                        setHover(newHover)
                     }}
                     emptyIcon={<Star style={{ opacity: 0.5 }} fontSize="inherit" />}
                    />
                    
                    <p></p>
        </Box>
    )
}