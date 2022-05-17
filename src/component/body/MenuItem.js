import React from "react";
import { Card , CardImg ,CardBody , CardTitle , CardImgOverlay } from "reactstrap";


const MenuItem =props=>{
    
    return(
        <div>
            <Card style={{margin : "15px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{opacity :"0.6"}}></CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{color : "black", fontSize:"24px", cursor:"pointer"}}
                         onClick={props.DishSelect}
                        >
                            {props.dish.name} 
                    
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>


        </div>

    );

}
export default MenuItem ;