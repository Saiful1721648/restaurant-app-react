// eslint-disable-next-line
import React from "react";
import {Navbar,NavbarBrand,Button } from "reactstrap";

const  Navigation =()=>{
    return(
        <div>
         <Navbar dark color="dark">
             <div className="container">
             <NavbarBrand  href="/">Restaurant App</NavbarBrand>
             <Button color="danger">Danger!</Button>
             </div>
         
         </Navbar>
    

        </div>

    );
}
export default Navigation ;
