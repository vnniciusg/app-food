import React from "react";
import { CgProfile } from 'react-icons/cg'


const Footer = () =>{
    return(
        <div className="bottom-0 left-0 w-full bg-violet-500 h-10">
            <div className="flex flex-row justify-between self-center">
                <CgProfile width={100} height={100} />
                <CgProfile width={40} height={40} />
                <CgProfile width={40} height={40} />
                <CgProfile width={40} height={40} />
            </div>
            
        </div>
    )
}

export default Footer;