import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useContext, useState } from "react";
import { ContextContents } from "../../context/context";

export function StarRating() {
    
    const { value } = useContext(ContextContents)
    
    const [hover, setHover] = useState(-1) 
    
    return(
        <Box>
                    <Rating  
                     name="hover-feedback"
                     value={value}
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