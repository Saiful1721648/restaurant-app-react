// eslint-disable-next-line
import React from "react";
import {Navbar,NavbarBrand,Button } from "reactstrap";

const  Navigation =()=>{
    return(
        <div>
         <Navbar dark color="dark">
             <div className="container">
             <NavbarBrand  href="/">Saiful's Restaurant App</NavbarBrand>
             <Button href="/" color="info">Welcome to my React Project</Button>
             </div>
         
         </Navbar>
    

        </div>

    );
}
export default Navigation ;
