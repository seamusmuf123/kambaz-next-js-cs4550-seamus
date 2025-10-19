'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LinkList({ a }: { a: { _id: string; title: string } }) {
  const { cid } = useParams<{ cid: string }>();
  return (
    <Link href={`/Courses/${cid}/Assignments/${a._id}`}>
      {a.title}
    </Link>
  );
}