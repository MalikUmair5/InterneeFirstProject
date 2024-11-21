import React from 'react'
import {Copyright} from "lucide-react";

const Footer = () => {
    return (
        <footer
            className="flex gap-5 justify-center items-center bg-gradient-to-r from-[#020024] via-[rgba(182,0,253,0.74)] to-[#00d4ff] text-white mt-5 p-5">
            <Copyright className={"size-10"}/>
            <h1 className={"text-4xl"}> Internee.pk</h1>
        </footer>
    )
}
export default Footer
