import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useState } from "react";


export function StarRating(props:any) {
    
    const [hover, setHover] = useState(-1) 

    
    return(
        <Box>
                    <Rating  
                     name="hover-feedback"
                     value={props.valueStar}
                     readOnly
                    //  onChange={(event, newvalue) => {
                    //     setValue(newvalue)
                    //  }}
                    //  onChangeActive={( event, newHover)=>{
                    //     setHover(newHover)
                    //  }}
                     emptyIcon={<Star style={{ opacity: 0.5 }} fontSize="inherit" />}
                    />
        </Box>
    )
}