import React from 'react';
import Link from 'next/link';

interface ILinkTo {
  text: string;
  href: string;
  handleClick?: () => void;
  className?: string;
}

const LinkTo: React.FC<ILinkTo> = ({ text, href, handleClick, className }) => {
  return (
    <Link href={href}>
      <div className={className} onClick={handleClick}>
        {text}
      </div>
    </Link>
  );
};

export default LinkTo;
