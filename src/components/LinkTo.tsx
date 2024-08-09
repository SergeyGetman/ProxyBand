import React from 'react';
import Link from 'next/link';

export default function LinkTo({ text, href, handleClick, className }) {
  return (
    <Link href={href}>
      <div className={className} onClick={handleClick}>
        {text}
      </div>
    </Link>
  );
}
