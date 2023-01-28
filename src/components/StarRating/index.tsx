import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useState } from "react";


export function StarRating(props:any) {
    
    const [hover, setHover] = useState(-1) 

    
    return(
        <Box>
                    <Rating  
                     name="customized-color"
                     value={props.valueStar}
                     readOnly
                     style={{color: "#1E90FF" }}
                    //  onChange={(event, newvalue) => {
                    //     setValue(newvalue)
                    //  }}
                    //  onChangeActive={( event, newHover)=>{
                    //     setHover(newHover)
                    //  }}
                     emptyIcon={<Star style={{ opacity: 0.5, color: "#800000" }} fontSize="inherit" />}
                    />
        </Box>
    )
}