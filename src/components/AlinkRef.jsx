import React from 'react';
import Link from "next/link";


export default  function ALinkRef({text, href, handleClick}) {
    return (
        <Link href={href}>
            <h2 onClick={handleClick}>{text}</h2>
        </Link>
    )
}