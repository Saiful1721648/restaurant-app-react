import React from "react";
import { Card , CardImg ,CardBody , CardTitle , CardText } from "reactstrap";



const DishDetail =props=>{
    return(
        <div>
            <Card style={{marginTop : "15px"}}>
            <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{textAlign: 'left'}}>
                <CardTitle>
                    {props.dish.name}
                </CardTitle>
                <CardText>
                    <p><b>Description :</b>{props.dish.description}</p>
                    <p><b>Price :</b>{props.dish.price} /-</p>
                    
                </CardText>

                </CardBody>
            </Card>

        </div>
    );
}
export default DishDetail ;