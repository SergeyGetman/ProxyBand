import React from 'react';
import Link from "next/link";
import MainContainer from "./MainContainer";


export default function ALinkRef({text, href, handleClick}) {
    return (
            <Link href={href}>
                <div onClick={handleClick}>{text}</div>
            </Link>


    )
}