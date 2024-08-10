import Link from 'next/link';

export default function ServerError() {
  return (
    <div>
      <h1>This page doesn't found </h1>
      <Link href={'/'}>
        <button type="button">Go Home</button>
      </Link>
    </div>
  );
}
