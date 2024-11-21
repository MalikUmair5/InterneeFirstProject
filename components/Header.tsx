import React from 'react'
import Link from "next/link";
import {ShoppingCartIcon} from "lucide-react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#020024] via-[rgba(182,0,253,0.74)] to-[#00d4ff] text-white mb-5 p-5">
            <ul className={"flex items-center justify-around text-3xl"}>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/"}>About</Link></li>
                <li><Link href={"/"}>Contact</Link></li>
                <li><Link href={"/"}><ShoppingCartIcon></ShoppingCartIcon></Link></li>

            </ul>
        </header>
    )
}
export default Header
